package com.anchormind.smartquiz.service.mapper;


import com.anchormind.smartquiz.domain.*;
import com.anchormind.smartquiz.service.dto.QuizAttemptDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link QuizAttempt} and its DTO {@link QuizAttemptDTO}.
 */

@Mapper(componentModel = "spring", uses = {QuizMapper.class, QuestionMapper.class})
public interface QuizAttemptMapper extends EntityMapper<QuizAttemptDTO, QuizAttempt> {

    default QuizAttempt fromId(String id) {
        if (id == null) {
            return null;
        }
        QuizAttempt quizAttempt = new QuizAttempt();
        quizAttempt.setId(id);
        return quizAttempt;
    }

}
