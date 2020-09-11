package com.anchormind.smartquiz.service.impl;

import com.anchormind.smartquiz.domain.Question;
import com.anchormind.smartquiz.security.SecurityUtils;
import com.anchormind.smartquiz.service.QuizService;
import com.anchormind.smartquiz.domain.Quiz;
import com.anchormind.smartquiz.repository.QuizRepository;
import com.anchormind.smartquiz.service.dto.QuizDTO;
import com.anchormind.smartquiz.service.mapper.QuizMapper;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.List;
import org.apache.commons.lang3.tuple.Pair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Quiz}.
 */
@Service
public class QuizServiceImpl implements QuizService {

    private final Logger log = LoggerFactory.getLogger(QuizServiceImpl.class);

    private final QuizRepository quizRepository;

    private final QuizMapper quizMapper;

    public QuizServiceImpl(QuizRepository quizRepository, QuizMapper quizMapper) {
        this.quizRepository = quizRepository;
        this.quizMapper = quizMapper;
    }

    @Override
    public QuizDTO save(QuizDTO quizDTO) {
        log.debug("Request to save Quiz : {}", quizDTO);
        String loggedInUser = SecurityUtils.getCurrentUserLogin().get();
        ZonedDateTime now = ZonedDateTime.now();

        Quiz quiz = quizMapper.toEntity(quizDTO);
        Question question = new Question();
        question.setText("Galileo was know as the Polymath from Pisa.");
        List<Pair<String, Boolean>> options = Arrays.asList(Pair.of("true", true), Pair.of("false", false));
        question.setOptions(options);
        question.setCreatedBy(loggedInUser);
        question.setCreatedDate(now);
        question.setUpdatedBy(loggedInUser);
        question.setUpdatedDate(now);
        quiz.setQuestions(Arrays.asList(question));
        if (quiz.getId() == null) {
            quiz.setCreatedBy(loggedInUser);
            quiz.setCreatedDate(now);
        } else {
            Quiz existingQuiz = quizRepository.findById(quizDTO.getId()).get();
            quiz.setCreatedBy(existingQuiz.getCreatedBy());
            quiz.setCreatedDate(existingQuiz.getCreatedDate());
        }
        quiz.setUpdatedBy(loggedInUser);
        quiz.setUpdatedDate(now);
        quiz = quizRepository.save(quiz);
        return quizMapper.toDto(quiz);
    }

    @Override
    public Page<QuizDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Quizzes");
        return quizRepository.findAll(pageable)
            .map(quizMapper::toDto);
    }


    @Override
    public Optional<QuizDTO> findOne(String id) {
        log.debug("Request to get Quiz : {}", id);
        return quizRepository.findById(id)
            .map(quizMapper::toDto);
    }

    @Override
    public void delete(String id) {
        log.debug("Request to delete Quiz : {}", id);
        quizRepository.deleteById(id);
    }
}
