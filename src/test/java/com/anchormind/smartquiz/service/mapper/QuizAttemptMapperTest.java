package com.anchormind.smartquiz.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class QuizAttemptMapperTest {

    private QuizAttemptMapper quizAttemptMapper;

    @BeforeEach
    public void setUp() {
        quizAttemptMapper = new QuizAttemptMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        String id = "id1";
        assertThat(quizAttemptMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(quizAttemptMapper.fromId(null)).isNull();
    }
}
