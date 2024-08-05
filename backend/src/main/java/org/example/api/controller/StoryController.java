package org.example.api.controller;

import lombok.AllArgsConstructor;
import org.example.api.dto.ChapterDTO;
import org.example.api.dto.StoryDTO;
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
        return storyService.fetchAllStories();
    }

    @GetMapping("/{id}")
    public StoryDTO getStoryById(@PathVariable Long id) {
        return storyService.getStoryById(id);
    }

    @PostMapping
    public StoryDTO createStory(@RequestBody StoryDTO storyDTO) {
        return storyService.createStory(storyDTO);
    }

    @PutMapping("/{id}")
    public StoryDTO updateStory(@PathVariable Long id, @RequestBody StoryDTO storyDTO) {
        return storyService.updateStory(id, storyDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteStory(@PathVariable Long id) {
        storyService.deleteStory(id);
    }

    @GetMapping("/search")
    public List<StoryDTO> searchStories(@RequestParam("query") String query) {
        return storyService.searchStories(query);
    }

    @PostMapping("/filter")
    public List<StoryDTO> filterStories(@RequestBody StoryDTO filterDTO) {
        return storyService.filterStories(filterDTO);
    }

    @GetMapping("/{storyId}/chapters")
    public List<ChapterDTO> getChaptersByStoryIdByOrder(@PathVariable Long storyId) {
        return chapterService.getChaptersByStoryIdByorder(storyId);
    }

    @GetMapping("/{storyId}/chapters1")
    public List<ChapterDTO> getChaptersByStoryId(@PathVariable Long storyId) {
        return chapterService.getChaptersByStoryId(storyId);
    }

    @GetMapping("/{slug}/chapters1")
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