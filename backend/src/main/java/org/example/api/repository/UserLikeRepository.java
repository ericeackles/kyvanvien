package org.example.api.repository;

import org.example.api.entity.UserLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserLikeRepository extends JpaRepository<UserLike, Long> {
    Optional<UserLike> findByUserIdAndStoryId(Long userId,Long storyId);
}
