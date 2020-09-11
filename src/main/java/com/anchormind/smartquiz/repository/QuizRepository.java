package com.anchormind.smartquiz.repository;

import com.anchormind.smartquiz.domain.Quiz;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Quiz entity.
 */
@SuppressWarnings("unused")
@Repository
public interface QuizRepository extends MongoRepository<Quiz, String> {
}
