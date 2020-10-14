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
import question from "app/entities/question/question";
import Score from "app/components/score";

export interface IQuizAttemptUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const QuizAttemptUpdate = (props: IQuizAttemptUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);
  const { quizAttemptEntity, loading, updating, questions } = props;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleClose = () => {
    props.history.push('/quiz-attempt' + props.location.search);
  };

  const nextQuestion = () => {
    if (questionNumber >= questions.length-1) {
      setIsComplete(true);
    }
    setQuestionNumber(questionNumber + 1);
  }

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
          <h2 id="smartquizApp.quizAttempt.home.createOrEditLabel"/>
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
                  <Label for="quiz-attempt-id" hidden>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="quiz-attempt-id" type="text" className="form-control" name="id" required readOnly hidden/>
                </AvGroup>
              ) : null}
              {!isComplete ?(
                <div>
                  <AvGroup>
                    <h3>
                      {questions[questionNumber]}
                    </h3>
                  </AvGroup>
                  <AvGroup className="text-center">
                    <Button onClick={nextQuestion} color="info">
                      True
                    </Button>
                    &nbsp;
                    <Button onClick={nextQuestion} color="danger">
                      False
                    </Button>
                  </AvGroup>
                </div>
              ) : (
                <div className="justify-center">
                  <Score val={questions.length} max={questions.length}/>
                </div>
              )}

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
  questions: storeState.quizAttempt.questions
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
