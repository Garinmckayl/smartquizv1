import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './quiz.reducer';
import { IQuiz } from 'app/shared/model/quiz.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { timeFromNow } from "app/shared/util/date-utils";
import axios from 'axios';

export interface IQuizProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Quiz = (props: IQuizProps) => {
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

  const attemptQuiz = quizId => () => {
    // const quiz = { quizId : quizId };
    // axios.post('https://reqres.in/api/articles', article)
    //   .then(response => this.setState({ articleId: response.data.id }));
    // props.history.push('/');
    //props.history.push('/quiz/' + quizId + '/quiz-attempt/new');
  }

  const { quizList, match, loading, totalItems } = props;
  return (
    <div>
      <h2 id="quiz-heading">
        <Translate contentKey="smartquizApp.quiz.home.title">Quizzes</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="smartquizApp.quiz.home.createLabel">Create new Quiz</Translate>
        </Link>
      </h2>
      {quizList && quizList.length > 0 ? (
        <div className="container">
          {quizList.map((quiz, i) => (
            <div className="card mb-4" key={`entity-${i}`}>
              <div className="card-header">
                <div className="row">
                  <div className="col-md-9">
                    <p className="card-text">{quiz.numberOfQuestions} questions</p>
                  </div>
                  <div className="col-md-3">
                    <div className="float-right">
                      <span className="badge badge-light">{quiz.level}</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="card-body">
                <div className="text-center">
                  <Button tag={Link} to={`${match.url}/${quiz.id}`} color="link">
                    <h4 className="card-title">{quiz.name}</h4>
                  </Button>
                  <p className="card-text"><small className="text-muted">Created {timeFromNow(quiz.createdDate)}</small></p>
                </div>

              </div>
              <div className="text-center">
                <Button
                  onClick={attemptQuiz(quiz.id)}
                  color="primary">Take Quiz</Button>
              </div>
            </div>
          ))
          }
        </div>
      ) : (
        !loading && (
          <div className="alert alert-warning">
            <Translate contentKey="smartquizApp.quiz.home.notFound">No Quizzes found</Translate>
          </div>
        )
      )}

      {props.totalItems ? (
        <div className={quizList && quizList.length > 0 ? '' : 'd-none'}>
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

const mapStateToProps = ({ quiz }: IRootState) => ({
  quizList: quiz.entities,
  loading: quiz.loading,
  totalItems: quiz.totalItems,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
