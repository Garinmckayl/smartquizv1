package com.anchormind.smartquiz.service.dto;

import java.time.ZonedDateTime;
import java.util.List;
import java.io.Serializable;

/**
 * A DTO for the {@link com.anchormind.smartquiz.domain.QuizAttempt} entity.
 */
public class QuizAttemptDTO implements Serializable {

    private String id;

    private QuizDTO quiz;

    private Integer attempted;

    private List<AnswerDTO> answers;

    private Integer score;

    private Integer maxScore;

    private String createdBy;

    private ZonedDateTime createdDate;

    private String updatedBy;

    private ZonedDateTime updatedDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public QuizDTO getQuiz() {
        return quiz;
    }

    public void setQuiz(QuizDTO quiz) {
        this.quiz = quiz;
    }

    public Integer getAttempted() {
        return attempted;
    }

    public void setAttempted(Integer attempted) {
        this.attempted = attempted;
    }

    public List<AnswerDTO> getAnswers() {
        return answers;
    }

    public void setAnswers(List<AnswerDTO> answers) {
        this.answers = answers;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Integer getMaxScore() {
        return maxScore;
    }

    public void setMaxScore(Integer maxScore) {
        this.maxScore = maxScore;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public ZonedDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(ZonedDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public ZonedDateTime getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(ZonedDateTime updatedDate) {
        this.updatedDate = updatedDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof QuizAttemptDTO)) {
            return false;
        }

        return id != null && id.equals(((QuizAttemptDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "QuizAttemptDTO{" +
            "id=" + getId() +
            ", quiz=" + getQuiz() +
            ", attempted=" + getAttempted() +
            ", answers=" + getAnswers() +
            ", score=" + getScore() +
            ", maxScore=" + getMaxScore() +
            ", createdBy='" + getCreatedBy() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            ", updatedBy='" + getUpdatedBy() + "'" +
            ", updatedDate='" + getUpdatedDate() + "'" +
            "}";
    }
}
