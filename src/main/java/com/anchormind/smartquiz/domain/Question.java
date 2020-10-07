package com.anchormind.smartquiz.domain;

import java.util.List;
import org.apache.commons.lang3.tuple.Pair;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;

/**
 * A Question.
 */
@Document(collection = "question")
public class Question implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("text")
    private String text;

    @Field("options")
    private List<Pair<String, Boolean>> options;

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

    public String getText() {
        return text;
    }

    public Question text(String text) {
        this.text = text;
        return this;
    }

    public void setText(String text) {
        this.text = text;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public List<Pair<String, Boolean>> getOptions() {
        return options;
    }

    public void setOptions(List<Pair<String, Boolean>> options) {
        this.options = options;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Question createdBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public ZonedDateTime getCreatedDate() {
        return createdDate;
    }

    public Question createdDate(ZonedDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }

    public void setCreatedDate(ZonedDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public Question updatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public ZonedDateTime getUpdatedDate() {
        return updatedDate;
    }

    public Question updatedDate(ZonedDateTime updatedDate) {
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
        if (!(o instanceof Question)) {
            return false;
        }
        return id != null && id.equals(((Question) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Question{" +
            "id=" + getId() +
            ", text='" + getText() + "'" +
            ", createdBy='" + getCreatedBy() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            ", updatedBy='" + getUpdatedBy() + "'" +
            ", updatedDate='" + getUpdatedDate() + "'" +
            "}";
    }
}
