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
public class StoryDTO {
    private Long id;
    private String storyImg;
    private String title;
    private String slug;
    private String description;
    private String author;
    private Long userId;
    private String userName;
    private Long genreId;
    private String genreName;
    private Long statusId;
    private String statusName;
    private Long typeId;
    private String typeName;
    private Date createdAt;
    private Date updatedAt;
}
