package com.anchormind.smartquiz.service;

import org.zalando.problem.AbstractThrowableProblem;

public class ForbiddenException extends AbstractThrowableProblem {

    private static final long serialVersionUID = 1L;

    private final String defaultMessage;

    private final String entityName;

    private final String errorKey;

    public ForbiddenException(String defaultMessage, String entityName, String errorKey) {
        this.defaultMessage = defaultMessage;
        this.entityName = entityName;
        this.errorKey = errorKey;
    }

    public String getDefaultMessage() {
        return defaultMessage;
    }

    public String getEntityName() {
        return entityName;
    }

    public String getErrorKey() {
        return errorKey;
    }

}
