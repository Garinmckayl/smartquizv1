package com.anchormind.smartquiz.service.dto;

import java.time.ZonedDateTime;
import java.util.List;
import javax.validation.constraints.*;
import java.io.Serializable;
import com.anchormind.smartquiz.domain.enumeration.QuizType;
import com.anchormind.smartquiz.domain.enumeration.QuizLevel;

/**
 * A DTO for the {@link com.anchormind.smartquiz.domain.Quiz} entity.
 */
public class QuizDTO implements Serializable {

    private String id;

    @NotNull
    private String name;

    @NotNull
    private String sourceUrl;

    @NotNull
    private QuizType type;

    @NotNull
    private QuizLevel level;

    @NotNull
    private Integer numberOfQuestions;

    private List<QuestionDTO> questions;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSourceUrl() {
        return sourceUrl;
    }

    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }

    public QuizType getType() {
        return type;
    }

    public void setType(QuizType type) {
        this.type = type;
    }

    public QuizLevel getLevel() {
        return level;
    }

    public void setLevel(QuizLevel level) {
        this.level = level;
    }

    public Integer getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public void setNumberOfQuestions(Integer numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public List<QuestionDTO> getQuestions() {
        return questions;
    }

    public void setQuestions(List<QuestionDTO> questions) {
        this.questions = questions;
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
        if (!(o instanceof QuizDTO)) {
            return false;
        }

        return id != null && id.equals(((QuizDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "QuizDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", sourceUrl='" + getSourceUrl() + "'" +
            ", type='" + getType() + "'" +
            ", level='" + getLevel() + "'" +
            ", numberOfQuestions=" + getNumberOfQuestions() +
            ", createdBy='" + getCreatedBy() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            ", updatedBy='" + getUpdatedBy() + "'" +
            ", updatedDate='" + getUpdatedDate() + "'" +
            "}";
    }
}
