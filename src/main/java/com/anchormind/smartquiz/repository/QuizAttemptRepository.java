package com.anchormind.smartquiz.repository;

import com.anchormind.smartquiz.domain.QuizAttempt;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the QuizAttempt entity.
 */
@SuppressWarnings("unused")
@Repository
public interface QuizAttemptRepository extends MongoRepository<QuizAttempt, String> {
}
