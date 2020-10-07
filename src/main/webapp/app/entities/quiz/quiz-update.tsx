import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './quiz.reducer';
import { IQuiz } from 'app/shared/model/quiz.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IQuizUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const QuizUpdate = (props: IQuizUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { quizEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/quiz' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.createdDate = convertDateTimeToServer(values.createdDate);
    values.updatedDate = convertDateTimeToServer(values.updatedDate);

    if (errors.length === 0) {
      const entity = {
        ...quizEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : quizEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="quiz-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="quiz-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="quiz-name">
                  <Translate contentKey="smartquizApp.quiz.name">Name</Translate>
                </Label>
                <AvField
                  id="quiz-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="sourceUrlLabel" for="quiz-sourceUrl">
                  <Translate contentKey="smartquizApp.quiz.sourceUrl">Source Url</Translate>
                </Label>
                {isNew ? (
                  <AvField
                    id="quiz-sourceUrl"
                    type="text"
                    name="sourceUrl"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                  ) : <AvInput id="quiz-sourceUrl" type="text" className="form-control" name="sourceUrl" required readOnly />
                }
              </AvGroup>
              <AvGroup>
                <Label id="typeLabel" for="quiz-type">
                  <Translate contentKey="smartquizApp.quiz.type">Type</Translate>
                </Label>
                {isNew ? (
                  <AvInput
                    id="quiz-type"
                    type="select"
                    className="form-control"
                    name="type"
                    value={(!isNew && quizEntity.type) || 'TRUE_FALSE'}
                  >
                    <option value="TRUE_FALSE">{translate('smartquizApp.QuizType.TRUE_FALSE')}</option>
                    <option value="MULTIPLE_CHOICE">{translate('smartquizApp.QuizType.MULTIPLE_CHOICE')}</option>
                  </AvInput>
                  ) : <AvInput id="quiz-type" type="text" className="form-control" name="type" required readOnly />
                }
              </AvGroup>
              <AvGroup>
                <Label id="levelLabel" for="quiz-level">
                  <Translate contentKey="smartquizApp.quiz.level">Level</Translate>
                </Label>
                {isNew ? (
                  <AvInput id="quiz-level" type="select" className="form-control" name="level" value={(!isNew && quizEntity.level) || 'EASY'}>
                    <option value="EASY">{translate('smartquizApp.QuizLevel.EASY')}</option>
                    <option value="MODERATE">{translate('smartquizApp.QuizLevel.MODERATE')}</option>
                    <option value="HARD">{translate('smartquizApp.QuizLevel.HARD')}</option>
                  </AvInput>
                ) : <AvInput id="quiz-level" type="text" className="form-control" name="level" required readOnly />
                }
              </AvGroup>
              <AvGroup>
                <Label id="numberOfQuestionsLabel" for="quiz-numberOfQuestions">
                  <Translate contentKey="smartquizApp.quiz.numberOfQuestions">Number Of Questions</Translate>
                </Label>
                {isNew ? (
                  <AvField
                    id="quiz-numberOfQuestions"
                    type="string"
                    className="form-control"
                    name="numberOfQuestions"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') },
                    }}
                  />
                ) : <AvInput id="quiz-numberOfQuestions" type="text" className="form-control" name="numberOfQuestions" required readOnly />
                }
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/quiz" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  quizEntity: storeState.quiz.entity,
  loading: storeState.quiz.loading,
  updating: storeState.quiz.updating,
  updateSuccess: storeState.quiz.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(QuizUpdate);
