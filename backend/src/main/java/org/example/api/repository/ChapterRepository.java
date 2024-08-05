package org.example.api.repository;

import org.example.api.entity.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChapterRepository extends JpaRepository<Chapter, Long> {
    List<Chapter> findByStoryId(Long storyId);
    List<Chapter> findByStorySlug(String slug);
    List<Chapter> findByStorySlugAndChapterNumber(String slug, int chapterNumber);
    Chapter findByStoryIdAndChapterId(Long storyId, Long chapterId);
//    Optional<Chapter> findByStoryIdAndChapterId(Long storyId, Long chapterId);
}
