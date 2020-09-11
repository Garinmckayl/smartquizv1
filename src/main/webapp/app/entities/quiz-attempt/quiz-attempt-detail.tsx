import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './quiz-attempt.reducer';
import { IQuizAttempt } from 'app/shared/model/quiz-attempt.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IQuizAttemptDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const QuizAttemptDetail = (props: IQuizAttemptDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { quizAttemptEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="smartquizApp.quizAttempt.detail.title">QuizAttempt</Translate> [<b>{quizAttemptEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="attempted">
              <Translate contentKey="smartquizApp.quizAttempt.attempted">Attempted</Translate>
            </span>
          </dt>
          <dd>{quizAttemptEntity.attempted}</dd>
          <dt>
            <span id="score">
              <Translate contentKey="smartquizApp.quizAttempt.score">Score</Translate>
            </span>
          </dt>
          <dd>{quizAttemptEntity.score}</dd>
          <dt>
            <span id="maxScore">
              <Translate contentKey="smartquizApp.quizAttempt.maxScore">Max Score</Translate>
            </span>
          </dt>
          <dd>{quizAttemptEntity.maxScore}</dd>
          <dt>
            <span id="createdBy">
              <Translate contentKey="smartquizApp.quizAttempt.createdBy">Created By</Translate>
            </span>
          </dt>
          <dd>{quizAttemptEntity.createdBy}</dd>
          <dt>
            <span id="createdDate">
              <Translate contentKey="smartquizApp.quizAttempt.createdDate">Created Date</Translate>
            </span>
          </dt>
          <dd>
            {quizAttemptEntity.createdDate ? (
              <TextFormat value={quizAttemptEntity.createdDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="updatedBy">
              <Translate contentKey="smartquizApp.quizAttempt.updatedBy">Updated By</Translate>
            </span>
          </dt>
          <dd>{quizAttemptEntity.updatedBy}</dd>
          <dt>
            <span id="updatedDate">
              <Translate contentKey="smartquizApp.quizAttempt.updatedDate">Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {quizAttemptEntity.updatedDate ? (
              <TextFormat value={quizAttemptEntity.updatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/quiz-attempt" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/quiz-attempt/${quizAttemptEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ quizAttempt }: IRootState) => ({
  quizAttemptEntity: quizAttempt.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(QuizAttemptDetail);
