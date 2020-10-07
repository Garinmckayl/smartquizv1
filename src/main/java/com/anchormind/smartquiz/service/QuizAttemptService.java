package com.anchormind.smartquiz.service;

import com.anchormind.smartquiz.service.dto.QuizAttemptDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link com.anchormind.smartquiz.domain.QuizAttempt}.
 */
public interface QuizAttemptService {

    /**
     * Save a quizAttempt.
     *
     * @param quizAttemptDTO the entity to save.
     * @return the persisted entity.
     */
    QuizAttemptDTO save(QuizAttemptDTO quizAttemptDTO);

    /**
     * Get all the quizAttempts.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<QuizAttemptDTO> findAll(Pageable pageable);


    /**
     * Get the "id" quizAttempt.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<QuizAttemptDTO> findOne(String id);

    /**
     * Delete the "id" quizAttempt.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
