import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import QuizAttempt from './quiz-attempt';
import QuizAttemptDetail from './quiz-attempt-detail';
import QuizAttemptUpdate from './quiz-attempt-update';
import QuizAttemptDeleteDialog from './quiz-attempt-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={QuizAttemptUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={QuizAttemptUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={QuizAttemptDetail} />
      <ErrorBoundaryRoute path={match.url} component={QuizAttempt} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={QuizAttemptDeleteDialog} />
  </>
);

export default Routes;
