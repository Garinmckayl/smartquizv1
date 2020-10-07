package com.anchormind.smartquiz.service.mapper;


import com.anchormind.smartquiz.domain.*;
import com.anchormind.smartquiz.service.dto.QuestionDTO;
import com.anchormind.smartquiz.service.dto.QuizDTO;

import java.util.List;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Quiz} and its DTO {@link QuizDTO}.
 */
@Mapper(componentModel = "spring", uses = {QuestionMapper.class})
public interface QuizMapper extends EntityMapper<QuizDTO, Quiz> {

    default Quiz fromId(String id) {
        if (id == null) {
            return null;
        }
        Quiz quiz = new Quiz();
        quiz.setId(id);
        return quiz;
    }

}
