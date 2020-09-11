package com.anchormind.smartquiz.service.mapper;


import com.anchormind.smartquiz.domain.*;
import com.anchormind.smartquiz.service.dto.QuestionDTO;

import java.util.List;
import java.util.stream.Collectors;
import org.apache.commons.lang3.tuple.Pair;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Question} and its DTO {@link QuestionDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface QuestionMapper extends EntityMapper<QuestionDTO, Question> {

    default Question fromId(String id) {
        if (id == null) {
            return null;
        }
        Question question = new Question();
        question.setId(id);
        return question;
    }

    @Mapping(target = "options", ignore = true)
    Question toEntity(QuestionDTO questionDTO);

    @Mapping(target = "options", ignore = true)
    QuestionDTO toDto(Question entity);

    List <Question> toEntity(List<QuestionDTO> dtoList);

    List <QuestionDTO> toDto(List<Question> entityList);

}
