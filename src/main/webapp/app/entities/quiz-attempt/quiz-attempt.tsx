import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './quiz-attempt.reducer';
import { IQuizAttempt } from 'app/shared/model/quiz-attempt.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';

export interface IQuizAttemptProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const QuizAttempt = (props: IQuizAttemptProps) => {
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE), props.location.search)
  );

  const getAllEntities = () => {
    props.getEntities(paginationState.activePage - 1, paginationState.itemsPerPage, `${paginationState.sort},${paginationState.order}`);
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page');
    const sort = params.get('sort');
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const { quizAttemptList, match, loading, totalItems } = props;
  return (
    <div>
      <h2 id="quiz-attempt-heading">
        {/*<Translate contentKey="smartquizApp.quizAttempt.home.title">Quiz Attempts</Translate>*/}
        My Quizzes
        {/*<Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">*/}
        {/*  <FontAwesomeIcon icon="plus" />*/}
        {/*  &nbsp;*/}
        {/*  <Translate contentKey="smartquizApp.quizAttempt.home.createLabel">Create new Quiz Attempt</Translate>*/}
        {/*</Link>*/}
      </h2>
      <div className="table-responsive">
        {quizAttemptList && quizAttemptList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('attempted')}>
                  <Translate contentKey="smartquizApp.quizAttempt.attempted">Attempted</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('score')}>
                  <Translate contentKey="smartquizApp.quizAttempt.score">Score</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('maxScore')}>
                  <Translate contentKey="smartquizApp.quizAttempt.maxScore">Max Score</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('createdBy')}>
                  <Translate contentKey="smartquizApp.quizAttempt.createdBy">Created By</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('createdDate')}>
                  <Translate contentKey="smartquizApp.quizAttempt.createdDate">Created Date</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('updatedBy')}>
                  <Translate contentKey="smartquizApp.quizAttempt.updatedBy">Updated By</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('updatedDate')}>
                  <Translate contentKey="smartquizApp.quizAttempt.updatedDate">Updated Date</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {quizAttemptList.map((quizAttempt, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${quizAttempt.id}`} color="link" size="sm">
                      {quizAttempt.quiz.name}
                    </Button>
                  </td>
                  <td>{quizAttempt.attempted ? quizAttempt.attempted : 0}</td>
                  <td>{quizAttempt.score ? quizAttempt.score : 0}</td>
                  <td>{quizAttempt.maxScore ? quizAttempt.maxScore : 100}</td>
                  <td>{quizAttempt.createdBy}</td>
                  <td>
                    {quizAttempt.createdDate ? <TextFormat type="date" value={quizAttempt.createdDate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{quizAttempt.updatedBy}</td>
                  <td>
                    {quizAttempt.updatedDate ? <TextFormat type="date" value={quizAttempt.updatedDate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      {/*<Button tag={Link} to={`${match.url}/${quizAttempt.id}`} color="info" size="sm">*/}
                      {/*  <FontAwesomeIcon icon="eye" />{' '}*/}
                      {/*  <span className="d-none d-md-inline">*/}
                      {/*    <Translate contentKey="entity.action.view">View</Translate>*/}
                      {/*  </span>*/}
                      {/*</Button>*/}
                      <Button
                        tag={Link}
                        to={`${match.url}/${quizAttempt.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          {/*<Translate contentKey="entity.action.edit">Take Quiz</Translate>*/}
                          Take Quiz
                        </span>
                      </Button>
                      {/*<Button*/}
                      {/*  tag={Link}*/}
                      {/*  to={`${match.url}/${quizAttempt.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}*/}
                      {/*  color="danger"*/}
                      {/*  size="sm"*/}
                      {/*>*/}
                      {/*  <FontAwesomeIcon icon="trash" />{' '}*/}
                      {/*  <span className="d-none d-md-inline">*/}
                      {/*    <Translate contentKey="entity.action.delete">Delete</Translate>*/}
                      {/*  </span>*/}
                      {/*</Button>*/}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="smartquizApp.quizAttempt.home.notFound">No Quiz Attempts found</Translate>
            </div>
          )
        )}
      </div>
      {props.totalItems ? (
        <div className={quizAttemptList && quizAttemptList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={props.totalItems}
            />
          </Row>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = ({ quizAttempt }: IRootState) => ({
  quizAttemptList: quizAttempt.entities,
  loading: quizAttempt.loading,
  totalItems: quizAttempt.totalItems,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(QuizAttempt);
