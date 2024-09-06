package org.example.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO {

    private Long commentId;
    private Long chapterId;
    private Long storyId;
    private Long userId;
    private String commentText;
    private Date createdAt;
}
