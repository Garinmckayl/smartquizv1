import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './quiz.reducer';
import { IQuiz } from 'app/shared/model/quiz.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IQuizDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const QuizDetail = (props: IQuizDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { quizEntity } = props;
  return (
    <Row className="justify-content-center">
      <Col md="8">
        <h2>
          <b>{quizEntity.name}</b>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="sourceUrl">
              <Translate contentKey="smartquizApp.quiz.sourceUrl">Source Url</Translate>
            </span>
          </dt>
          <dd>{quizEntity.sourceUrl}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="smartquizApp.quiz.type">Type</Translate>
            </span>
          </dt>
          <dd>{quizEntity.type}</dd>
          <dt>
            <span id="level">
              <Translate contentKey="smartquizApp.quiz.level">Level</Translate>
            </span>
          </dt>
          <dd>{quizEntity.level}</dd>
          <dt>
            <span id="numberOfQuestions">
              <Translate contentKey="smartquizApp.quiz.numberOfQuestions">Number Of Questions</Translate>
            </span>
          </dt>
          <dd>{quizEntity.numberOfQuestions}</dd>
          <dt>
            <span id="createdBy">
              <Translate contentKey="smartquizApp.quiz.createdBy">Created By</Translate>
            </span>
          </dt>
          <dd>{quizEntity.createdBy}</dd>
          <dt>
            <span id="createdDate">
              <Translate contentKey="smartquizApp.quiz.createdDate">Created Date</Translate>
            </span>
          </dt>
          <dd>{quizEntity.createdDate ? <TextFormat value={quizEntity.createdDate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedBy">
              <Translate contentKey="smartquizApp.quiz.updatedBy">Updated By</Translate>
            </span>
          </dt>
          <dd>{quizEntity.updatedBy}</dd>
          <dt>
            <span id="updatedDate">
              <Translate contentKey="smartquizApp.quiz.updatedDate">Updated Date</Translate>
            </span>
          </dt>
          <dd>{quizEntity.updatedDate ? <TextFormat value={quizEntity.updatedDate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/quiz" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/quiz/${quizEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ quiz }: IRootState) => ({
  quizEntity: quiz.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(QuizDetail);
