package com.anchormind.smartquiz.service.impl;

import com.anchormind.smartquiz.security.AuthoritiesConstants;
import com.anchormind.smartquiz.security.SecurityUtils;
import com.anchormind.smartquiz.service.QuizAttemptService;
import com.anchormind.smartquiz.domain.QuizAttempt;
import com.anchormind.smartquiz.repository.QuizAttemptRepository;
import com.anchormind.smartquiz.service.dto.QuizAttemptDTO;
import com.anchormind.smartquiz.service.mapper.QuizAttemptMapper;
import com.anchormind.smartquiz.web.rest.errors.ForbiddenException;
import java.time.ZonedDateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Service Implementation for managing {@link QuizAttempt}.
 */
@Service
public class QuizAttemptServiceImpl implements QuizAttemptService {

    private final Logger log = LoggerFactory.getLogger(QuizAttemptServiceImpl.class);

    private final QuizAttemptRepository quizAttemptRepository;

    private final QuizAttemptMapper quizAttemptMapper;

    public QuizAttemptServiceImpl(QuizAttemptRepository quizAttemptRepository, QuizAttemptMapper quizAttemptMapper) {
        this.quizAttemptRepository = quizAttemptRepository;
        this.quizAttemptMapper = quizAttemptMapper;
    }

    @Override
    public QuizAttemptDTO save(QuizAttemptDTO quizAttemptDTO) {
        log.debug("Request to save QuizAttempt : {}", quizAttemptDTO);
        String loggedInUser = SecurityUtils.getCurrentUserLogin().get();
        QuizAttempt quizAttempt = quizAttemptMapper.toEntity(quizAttemptDTO);
        if (quizAttempt.getId() == null) {
            quizAttempt.setCreatedBy(loggedInUser);
            quizAttempt.setCreatedDate(ZonedDateTime.now());
        } else {
            String createdBy = quizAttemptRepository.findById(quizAttempt.getId()).get().getCreatedBy();
            if (! createdBy.equalsIgnoreCase(loggedInUser)) {
                throw new ForbiddenException("Quiz Attempt cannot be modified by others.", "quiz-attempt", "notOwnerOfResource");
            }
        }
        quizAttempt.setUpdatedBy(loggedInUser);
        quizAttempt.setUpdatedDate(ZonedDateTime.now());
        quizAttempt = quizAttemptRepository.save(quizAttempt);
        return quizAttemptMapper.toDto(quizAttempt);
    }

    @Override
    public Page<QuizAttemptDTO> findAll(Pageable pageable) {
        log.debug("Request to get all QuizAttempts");
        return quizAttemptRepository.findAll(pageable)
            .map(quizAttemptMapper::toDto);
    }


    @Override
    public Optional<QuizAttemptDTO> findOne(String id) {
        log.debug("Request to get QuizAttempt : {}", id);
        return quizAttemptRepository.findById(id)
            .map(quizAttemptMapper::toDto);
    }

    @Override
    public void delete(String id) {
        log.debug("Request to delete QuizAttempt : {}", id);
        String loggedInUser = SecurityUtils.getCurrentUserLogin().get();
        String createdBy = quizAttemptRepository.findById(id).get().getCreatedBy();
        if (!SecurityUtils.isCurrentUserInRole(AuthoritiesConstants.ADMIN) || !createdBy.equalsIgnoreCase(loggedInUser)) {
            throw new ForbiddenException("Quiz Attempt cannot be modified by others.", "quiz-attempt", "notOwnerOfResource");
        }
        quizAttemptRepository.deleteById(id);
    }
}
