import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Quiz from './quiz';
import QuizAttempt from './quiz-attempt';
import Question from './question';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}quiz`} component={Quiz} />
      <ErrorBoundaryRoute path={`${match.url}quiz-attempt`} component={QuizAttempt} />
      <ErrorBoundaryRoute path={`${match.url}question`} component={Question} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
