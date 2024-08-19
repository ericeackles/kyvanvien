package org.example.api.repository;

import org.example.api.entity.View;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ViewRepository extends JpaRepository<View, Long> {
}
