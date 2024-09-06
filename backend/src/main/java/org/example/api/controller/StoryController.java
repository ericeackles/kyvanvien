package org.example.api.controller;


import lombok.AllArgsConstructor;
import org.example.api.dto.ChapterDTO;
import org.example.api.dto.StoryDTO;
import org.example.api.entity.Chapter;
import org.example.api.entity.Story;
import org.example.api.service.ChapterService;
import org.example.api.service.StoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/stories")
public class StoryController {
    private final StoryService storyService;
    private final ChapterService chapterService;

    @GetMapping
    public List<StoryDTO> getAllStories() {
        return storyService.fetchAllStories(); // Phương thức sẽ trả về danh sách StoryDTO
    }

    @GetMapping("/{id}")
    public StoryDTO getStoryById(@PathVariable Long id) {
        return storyService.getStoryById(id); // Phương thức sẽ trả về StoryDTO
    }

    @PostMapping
    public StoryDTO createStory(@RequestBody StoryDTO storyDTO) {
        return storyService.createStory(storyDTO); // Phương thức sẽ nhận StoryDTO và trả về StoryDTO
    }

    @PutMapping("/{id}")
    public StoryDTO updateStory(@PathVariable Long id, @RequestBody StoryDTO storyDTO) {
        return storyService.updateStory(id, storyDTO); // Phương thức sẽ nhận StoryDTO và trả về StoryDTO
    }

    @DeleteMapping("/{id}")
    public void deleteStory(@PathVariable Long id) {
        storyService.deleteStory(id); // Phương thức sẽ xóa câu chuyện theo id
    }

    @GetMapping("/search")
    public List<StoryDTO> searchStories(@RequestParam("query") String query) {
        return storyService.searchStories(query);
    }

    @GetMapping("/filter")
    public List<StoryDTO> filterStories(
            @RequestParam(value = "typeId", required = false) Long typeId,
            @RequestParam(value = "genreId", required = false) Long genreId,
            @RequestParam(value = "statusId", required = false) Long statusId) {
        return storyService.filterStories(typeId, genreId, statusId);
    }
//    public List<StoryDTO> filterStories(@RequestBody StoryDTO filterDTO) {
//        return storyService.filterStories(filterDTO);
//    }


    @GetMapping("/{storyId}/chapters")
    public List<ChapterDTO> getChaptersByStoryIdByOrder(@PathVariable Long storyId) {
        return chapterService.getChaptersByStoryIdByOrder(storyId);
    }

    @GetMapping("/{storyId}/chapters1")
    public List<ChapterDTO> getChaptersByStoryId(@PathVariable Long storyId) {
        return chapterService.getChaptersByStoryId(storyId);
    }

    @GetMapping("/{slug}/chapters2")
    public ResponseEntity<List<ChapterDTO>> getChaptersByStorySlug(@PathVariable String slug) {
        List<ChapterDTO> chapters = chapterService.getChaptersByStorySlug(slug);
        return ResponseEntity.ok(chapters);
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<StoryDTO> getStoryBySlug(@PathVariable String slug) {
        StoryDTO storyDTO = storyService.getStoryBySlug(slug);
        return ResponseEntity.ok(storyDTO);
    }

}
