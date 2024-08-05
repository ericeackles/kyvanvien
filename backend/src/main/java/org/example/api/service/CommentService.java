package org.example.api.service;


import lombok.AllArgsConstructor;
import org.example.api.dto.CommentDTO;
import org.example.api.entity.Comment;
import org.example.api.mapper.CommentMapper;
import org.example.api.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    private CommentMapper commentMapper;

    public CommentDTO getCommentById(Long commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("Comment not found with ID: " + commentId));
        return CommentMapper.toDTO(comment);
    }


    public List<CommentDTO> getCommentsByStoryId(Long storyId) {
        List<Comment> comments = commentRepository.findByStoryId(storyId);
        return comments.stream()
                .map(CommentMapper::toDTO)
                .collect(Collectors.toList());
    }


    public List<CommentDTO> getAllComments(Long chapterId, Long storyId, Long userId) {
        List<CommentDTO> comments = commentRepository.findAll().stream()
                .map(CommentMapper::toDTO)
                .collect(Collectors.toList());

        if (chapterId != null) {
            comments = comments.stream()
                    .filter(comment -> comment.getChapterId().equals(chapterId))
                    .collect(Collectors.toList());
        }

        if (storyId != null) {
            comments = comments.stream()
                    .filter(comment -> comment.getStoryId().equals(storyId))
                    .collect(Collectors.toList());
        }

        if (userId != null) {
            comments = comments.stream()
                    .filter(comment -> comment.getUserId().equals(userId))
                    .collect(Collectors.toList());
        }

        return comments;
    }

    public List<CommentDTO> getAll() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream()
                .map(CommentMapper::toDTO)
                .collect(Collectors.toList());
    }

    public CommentDTO createComment(CommentDTO commentDTO) {
        Comment comment = commentMapper.toEntity(commentDTO);
        Comment savedComment = commentRepository.save(comment);
        return CommentMapper.toDTO(savedComment);
    }

    public void deleteComment(Long commentId) {
        if (!commentRepository.existsById(commentId)) {
            throw new RuntimeException("Comment not found with ID: " + commentId);
        }
        commentRepository.deleteById(commentId);
    }
}
