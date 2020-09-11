import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './quiz-attempt.reducer';
import { IQuizAttempt } from 'app/shared/model/quiz-attempt.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IQuizAttemptUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const QuizAttemptUpdate = (props: IQuizAttemptUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { quizAttemptEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/quiz-attempt' + props.location.search);
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
        ...quizAttemptEntity,
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
          <h2 id="smartquizApp.quizAttempt.home.createOrEditLabel">
            <Translate contentKey="smartquizApp.quizAttempt.home.createOrEditLabel">Create or edit a QuizAttempt</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : quizAttemptEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="quiz-attempt-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="quiz-attempt-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="attemptedLabel" for="quiz-attempt-attempted">
                  <Translate contentKey="smartquizApp.quizAttempt.attempted">Attempted</Translate>
                </Label>
                <AvField id="quiz-attempt-attempted" type="string" className="form-control" name="attempted" />
              </AvGroup>
              <AvGroup>
                <Label id="scoreLabel" for="quiz-attempt-score">
                  <Translate contentKey="smartquizApp.quizAttempt.score">Score</Translate>
                </Label>
                <AvField id="quiz-attempt-score" type="string" className="form-control" name="score" />
              </AvGroup>
              <AvGroup>
                <Label id="maxScoreLabel" for="quiz-attempt-maxScore">
                  <Translate contentKey="smartquizApp.quizAttempt.maxScore">Max Score</Translate>
                </Label>
                <AvField id="quiz-attempt-maxScore" type="string" className="form-control" name="maxScore" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/quiz-attempt" replace color="info">
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
  quizAttemptEntity: storeState.quizAttempt.entity,
  loading: storeState.quizAttempt.loading,
  updating: storeState.quizAttempt.updating,
  updateSuccess: storeState.quizAttempt.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(QuizAttemptUpdate);
