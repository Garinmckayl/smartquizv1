import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <div className="justify-content-center">
      <Row>
        <Col md="9">
          <h2>
            {account && account.login
              ? (<Translate contentKey="home.title" interpolate={{ firstName: account.firstName, lastName: account.lastName}}>Welcome to Smart Quiz!</Translate>)
              : "Welcome to Smartquiz"
            }
          </h2>
          <p className="lead">
            <Translate contentKey="home.subtitle">Learn smarter, not harder</Translate>
          </p>
          {account && account.login ? (
            <div>
              <Alert color="success">
                <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                  You are logged in as user {account.login}.
                </Translate>
              </Alert>
            </div>
          ) : (
            <div className="justify-content-center">
              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.sign-in">Login</Translate>
              </Link><br/>
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </div>
          )}

        </Col>
        <Col md="3" className="pad">
          <span className="hipster rounded" />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
