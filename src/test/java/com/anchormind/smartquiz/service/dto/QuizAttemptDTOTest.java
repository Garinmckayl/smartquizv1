package com.anchormind.smartquiz.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.anchormind.smartquiz.web.rest.TestUtil;

public class QuizAttemptDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(QuizAttemptDTO.class);
        QuizAttemptDTO quizAttemptDTO1 = new QuizAttemptDTO();
        quizAttemptDTO1.setId("id1");
        QuizAttemptDTO quizAttemptDTO2 = new QuizAttemptDTO();
        assertThat(quizAttemptDTO1).isNotEqualTo(quizAttemptDTO2);
        quizAttemptDTO2.setId(quizAttemptDTO1.getId());
        assertThat(quizAttemptDTO1).isEqualTo(quizAttemptDTO2);
        quizAttemptDTO2.setId("id2");
        assertThat(quizAttemptDTO1).isNotEqualTo(quizAttemptDTO2);
        quizAttemptDTO1.setId(null);
        assertThat(quizAttemptDTO1).isNotEqualTo(quizAttemptDTO2);
    }
}
