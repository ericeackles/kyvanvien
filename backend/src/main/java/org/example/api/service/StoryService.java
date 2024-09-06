package org.example.api.service;


import lombok.AllArgsConstructor;
import org.example.api.dto.ChapterDTO;
import org.example.api.dto.StoryDTO;
import org.example.api.entity.*;
import org.example.api.mapper.ChapterMapper;
import org.example.api.mapper.StoryMapper;
import org.example.api.repository.*;
import org.example.api.util.SlugGenerator;
import org.example.api.util.StringUtils;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StoryService {
    private final StoryRepository storyRepository;

    private final UserRepository userRepository;

    private final GenreRepository genreRepository;

    private final StatusstoryRepository statusstoryRepository;

    private final TypeRepository typeRepository;

    private final ChapterRepository chapterRepository;

    private final RatingRepository ratingRepository;

    public List<StoryDTO> fetchAllStories() {
        Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE, Sort.by(Sort.Direction.DESC, "id"));

        List<Story> stories = storyRepository.findAll(pageable).getContent();

        return stories.stream()
                .map(story -> {
                    // Đếm số chương cho mỗi story
                    Long chapterCount = chapterRepository.countByStoryId(story.getId());
                    // Sử dụng phương thức toDTO có chapterCount
                    return StoryMapper.toDTO(story);
                })
                .collect(Collectors.toList());
    }

    public StoryDTO getStoryById(Long id) {
        Story story = storyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Story not found with ID: " + id));

        // Đếm số lượng chương liên quan đến story này
        Long chapterCount = chapterRepository.countByStoryId(id);

        Long ratingCount = ratingRepository.countRatingsByStoryId(story.getId());
        Double averageRating = ratingRepository.averageRatingByStoryId(story.getId());
        averageRating = (averageRating != null) ? averageRating : 0.0;

        // Map Story thành StoryDTO và set số lượng chương
        StoryDTO storyDTO = StoryMapper.toDTO(story);
        storyDTO.setChapterCount(chapterCount);  // Giả sử bạn đã thêm trường chapterCount vào StoryDTO
        storyDTO.setRatingCount(ratingCount);
        storyDTO.setAverageRating(averageRating);

        return storyDTO;
    }

    public StoryDTO createStory(StoryDTO storyDTO) {
        // Tìm các thực thể liên quan dựa trên ID
        User user = userRepository.findById(storyDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + storyDTO.getUserId()));

        Genre genre = genreRepository.findById(storyDTO.getGenreId())
                .orElseThrow(() -> new RuntimeException("Genre not found with ID: " + storyDTO.getGenreId()));

        Statusstory statusstory = statusstoryRepository.findById(storyDTO.getStatusId())
                .orElseThrow(() -> new RuntimeException("Status not found with ID: " + storyDTO.getStatusId()));

        Type type = typeRepository.findById(storyDTO.getTypeId())
                .orElseThrow(() -> new RuntimeException("Type not found with ID: " + storyDTO.getTypeId()));

        // Chuyển đổi StoryDTO thành Story entity
        Story story = StoryMapper.toEntity(storyDTO);
        String slug = SlugGenerator.toSlug(story.getTitle());
        story.setSlug(slug);
        // Thiết lập các mối quan hệ
        story.setUser(user);
        story.setGenre(genre);
        story.setStatus(statusstory);
        story.setType(type);

        // Lưu Story vào cơ sở dữ liệu
        story = storyRepository.save(story);

        // Chuyển đổi Story entity thành StoryDTO và trả về
        return StoryMapper.toDTO(story);
    }

    public StoryDTO updateStory(Long id, StoryDTO storyDTO) {
        Story existingStory = storyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Story not found with ID: " + id));

        existingStory.setStoryImg(storyDTO.getStoryImg());
        existingStory.setTitle(storyDTO.getTitle());
        existingStory.setDescription(storyDTO.getDescription());
        existingStory.setAuthor(storyDTO.getAuthor());
        // Cập nhật các thuộc tính khác nếu cần
        if (storyDTO.getUserId() != null) {
            User user = userRepository.findById(storyDTO.getUserId())
                    .orElseThrow(() -> new RuntimeException("User not found with ID: " + storyDTO.getUserId()));
            existingStory.setUser(user);
        }

        if (storyDTO.getGenreId() != null) {
            Genre genre = genreRepository.findById(storyDTO.getGenreId())
                    .orElseThrow(() -> new RuntimeException("Genre not found with ID: " + storyDTO.getGenreId()));
            existingStory.setGenre(genre);
        }

        if (storyDTO.getStatusId() != null) {
            Statusstory statusstory = statusstoryRepository.findById(storyDTO.getStatusId())
                    .orElseThrow(() -> new RuntimeException("Status not found with ID: " + storyDTO.getStatusId()));
            existingStory.setStatus(statusstory);
        }

        if (storyDTO.getTypeId() != null) {
            Type type = typeRepository.findById(storyDTO.getTypeId())
                    .orElseThrow(() -> new RuntimeException("Type not found with ID: " + storyDTO.getTypeId()));
            existingStory.setType(type);
        }

//        String slug = SlugGenerator.toSlug(storyDTO.getTitle());
//        existingStory.setSlug(slug);

        existingStory.setSlug(storyDTO.getSlug());

        // Cập nhật các thuộc tính thời gian nếu cần
        existingStory.setUpdatedAt(new Date());

        // Lưu đối tượng Story đã được cập nhật vào cơ sở dữ liệu
        Story updatedStory = storyRepository.save(existingStory);

        // Chuyển đổi đối tượng Story thành StoryDTO và trả về
        return StoryMapper.toDTO(updatedStory);
    }

    public void deleteStory(Long id) {
        Story story = storyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Story not found with ID: " + id));
        storyRepository.delete(story);
    }

//    public List<StoryDTO> searchStories(String query) {
//        // Chuẩn hóa chuỗi tìm kiếm: loại bỏ dấu và chuyển sang chữ thường
//        String normalizedQuery = StringUtils.removeDiacritics(query).toLowerCase();
//
//        // Lấy tất cả các story và lọc theo tiêu chí tìm kiếm đã chuẩn hóa
//        List<Story> stories = storyRepository.findAll().stream()
//                .filter(story -> {
//                    String normalizedTitle = StringUtils.removeDiacritics(story.getTitle()).toLowerCase();
//                    String normalizedAuthor = StringUtils.removeDiacritics(story.getAuthor()).toLowerCase();
//                    return normalizedTitle.contains(normalizedQuery) || normalizedAuthor.contains(normalizedQuery);
//                })
//                .collect(Collectors.toList());
//
//        // Chuyển đổi danh sách Story entities thành StoryDTOs
//        return stories.stream()
//                .map(StoryMapper::toDTO) // Sử dụng phương thức static
//                .collect(Collectors.toList());
//    }
public List<StoryDTO> searchStories(String query) {
    // Chuẩn hóa chuỗi tìm kiếm: loại bỏ dấu và chuyển sang chữ thường
    String normalizedQuery = StringUtils.removeDiacritics(query).toLowerCase();

    // Lấy tất cả các story và lọc theo tiêu chí tìm kiếm đã chuẩn hóa
    List<Story> stories = storyRepository.findAll().stream()
            .filter(story -> {
                String normalizedTitle = StringUtils.removeDiacritics(story.getTitle()).toLowerCase();
                String normalizedAuthor = StringUtils.removeDiacritics(story.getAuthor()).toLowerCase();
                return normalizedTitle.contains(normalizedQuery) || normalizedAuthor.contains(normalizedQuery);
            })
            .collect(Collectors.toList());

    // Chuyển đổi danh sách Story entities thành StoryDTOs với chapterCount
    return stories.stream()
            .map(story -> {
//                Long chapterCount = chapterRepository.countByStoryId(story.getId()); // Đếm số chương
                return StoryMapper.toDTO(story); // Sử dụng phương thức static với chapterCount
            })
            .collect(Collectors.toList());
}


    public List<StoryDTO> filterStories(Long typeId, Long genreId, Long statusId) {
        List<Story> stories = storyRepository.findByTypeGenreStatus(typeId, genreId, statusId);
        return stories.stream()
                .map(story -> {
                Long chapterCount = chapterRepository.countByStoryId(story.getId()); // Đếm số chương
                    return StoryMapper.toDTO(story); // Sử dụng phương thức static với chapterCount
                })
                .collect(Collectors.toList());
    }

    public List<ChapterDTO> getChaptersByStoryId(Long storyId) {
        List<Chapter> chapters = chapterRepository.findByStoryId(storyId);
        return chapters.stream()
                .map(ChapterMapper::toDTO)
                .collect(Collectors.toList());
    }

    public StoryDTO getStoryBySlug(String slug) {
        Story story = storyRepository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Story not found with slug: " + slug));

        Long chapterCount = chapterRepository.countByStoryId(story.getId()); // Đếm số chương

        // Đếm số lượng rating và giá trị trung bình rating cho câu chuyện này
        Long ratingCount = ratingRepository.countRatingsByStoryId(story.getId());
        Double averageRating = ratingRepository.averageRatingByStoryId(story.getId());
        averageRating = (averageRating != null) ? averageRating : 0.0;

        StoryDTO storyDTO = StoryMapper.toDTO(story);
        storyDTO.setChapterCount(chapterCount);
        storyDTO.setRatingCount(ratingCount);
        storyDTO.setAverageRating(averageRating);

        return storyDTO; // Truyền thêm chapterCount vào phương thức toDTO
    }
}
