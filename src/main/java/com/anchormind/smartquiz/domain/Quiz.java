package com.anchormind.smartquiz.domain;

import io.github.kaiso.relmongo.annotation.CascadeType;
import io.github.kaiso.relmongo.annotation.FetchType;
import io.github.kaiso.relmongo.annotation.JoinProperty;
import io.github.kaiso.relmongo.annotation.OneToMany;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;

import com.anchormind.smartquiz.domain.enumeration.QuizType;

import com.anchormind.smartquiz.domain.enumeration.QuizLevel;

/**
 * A Quiz.
 */
@Document(collection = "quiz")
public class Quiz implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("name")
    private String name;

    @NotNull
    @Field("source_url")
    private String sourceUrl;

    @NotNull
    @Field("type")
    private QuizType type;

    @NotNull
    @Field("level")
    private QuizLevel level;

    @NotNull
    @Field("number_of_questions")
    private Integer numberOfQuestions;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinProperty(name="questions")
    private List<Question> questions;

    @NotNull
    @Field("created_by")
    private String createdBy;

    @NotNull
    @Field("created_date")
    private ZonedDateTime createdDate;

    @NotNull
    @Field("updated_by")
    private String updatedBy;

    @NotNull
    @Field("updated_date")
    private ZonedDateTime updatedDate;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Quiz name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSourceUrl() {
        return sourceUrl;
    }

    public Quiz sourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }

    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }

    public QuizType getType() {
        return type;
    }

    public Quiz type(QuizType type) {
        this.type = type;
        return this;
    }

    public void setType(QuizType type) {
        this.type = type;
    }

    public QuizLevel getLevel() {
        return level;
    }

    public Quiz level(QuizLevel level) {
        this.level = level;
        return this;
    }

    public void setLevel(QuizLevel level) {
        this.level = level;
    }

    public Integer getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public Quiz numberOfQuestions(Integer numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
        return this;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public void setNumberOfQuestions(Integer numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Quiz createdBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public ZonedDateTime getCreatedDate() {
        return createdDate;
    }

    public Quiz createdDate(ZonedDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }

    public void setCreatedDate(ZonedDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public Quiz updatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public ZonedDateTime getUpdatedDate() {
        return updatedDate;
    }

    public Quiz updatedDate(ZonedDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }

    public void setUpdatedDate(ZonedDateTime updatedDate) {
        this.updatedDate = updatedDate;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Quiz)) {
            return false;
        }
        return id != null && id.equals(((Quiz) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Quiz{" +
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
