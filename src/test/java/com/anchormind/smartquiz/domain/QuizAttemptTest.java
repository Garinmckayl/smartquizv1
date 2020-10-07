package com.anchormind.smartquiz.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.anchormind.smartquiz.web.rest.TestUtil;

public class QuizAttemptTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(QuizAttempt.class);
        QuizAttempt quizAttempt1 = new QuizAttempt();
        quizAttempt1.setId("id1");
        QuizAttempt quizAttempt2 = new QuizAttempt();
        quizAttempt2.setId(quizAttempt1.getId());
        assertThat(quizAttempt1).isEqualTo(quizAttempt2);
        quizAttempt2.setId("id2");
        assertThat(quizAttempt1).isNotEqualTo(quizAttempt2);
        quizAttempt1.setId(null);
        assertThat(quizAttempt1).isNotEqualTo(quizAttempt2);
    }
}
