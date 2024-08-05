package org.example.api.service;

import lombok.AllArgsConstructor;
import org.example.api.entity.Genre;
import org.example.api.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class GenreService {


    private final GenreRepository genreRepository;

    public List<Genre> fetchAllGenre() {
        try {
            return genreRepository.findAll(Sort.by(Sort.Direction.ASC, "genreId"));
        } catch (Exception e) {
            // Xử lý lỗi hoặc ghi log
            throw new RuntimeException("Failed to fetch all genres: " + e.getMessage());
        }
    }

    public Genre getGenreById(Long id) {
        return genreRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Genre not found with ID: " + id));
    }

    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    public Optional<Genre> updategenre(Long id, Genre updatedgenre) {
        try {
            Optional<Genre> existinggenreOptional = genreRepository.findById(id);
            if (existinggenreOptional.isPresent()) {
                Genre existinggenre = existinggenreOptional.get();
                existinggenre.setGenreName(updatedgenre.getGenreName());
                Genre savedEntity = genreRepository.save(existinggenre);
                return Optional.of(savedEntity);
            } else {
                return Optional.empty();
            }
        } catch (Exception e) {
            // Handle exception or log the error
            throw new RuntimeException("Failed to update genre: " + e.getMessage());
        }
    }
    public boolean deleteGenre(Long id) {
        try {
            genreRepository.deleteById(id);
            return true; // Deletion successful
        } catch (Exception e) {
            // Handle exception or log the error
            throw new RuntimeException("Failed to delete Genre: " + e.getMessage());
        }
    }
}
