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
      </Row>
    <div>

  {/* Header */}
  <header id="header" className="header">
    <div className="header-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <h1>Quiz Generator For Articles.</h1>
              <p className="p-large">Use SmartQuiz to test yourself.</p>
              <form id="demoForm" data-toggle="validator" data-focus="false">
                <div className="form-group">
                  <input
                    type="url"
                    className="form-control-input"
                    id="urlInput"
                    defaultValue="https://en.wikipedia.org/wiki/Alexander_the_Great"
                    placeholder="Paste Any Wikipedia Url"
                    required
                  />
                  {/* <label class="label-control" for="nemail">Paste Any Wikipedia Url</label> */}
                  <div className="help-block with-errors" />
                </div>
                <a
                  className="btn-solid-lg popup-with-move-anim"
                  href="#demo-lightbox-2"
                  id="submitUrl"
                >
                  Demo
                </a>
              </form>
            </div>
            {/* end of text-container */}
          </div>
          {/* end of col */}
          <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <div className="img-wrapper">
                <img
                  className="img-fluid"
                  src="https://cdn.glitch.com/679ccf85-1841-476d-af16-114eb8aef09c%2Fheader.svg?v=1599743490259"
                  alt="alternative"
                />
              </div>
              {/* end of img-wrapper */}
            </div>
            {/* end of image-container */}
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of header-content */}
  </header>
  {/* end of header */}
  <svg
    className="header-frame"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1920 310"
  >
    <defs>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n          .cls-1 {\n            fill: #ff5900;\n          }\n        "
        }}
      />
    </defs>
    <title>header-frame</title>
    <path
      className="cls-1"
      d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"
    />
  </svg>
  {/* end of header */}
  {/* Description */}
  <div className="cards-1" id="description">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="above-heading">DESCRIPTION</div>
          <h2 className="h2-heading">Make self-assessments quick and easy.</h2>
        </div>
        {/* end of col */}
      </div>
      {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img
                className="img-fluid"
                src="images/description-1.svg"
                alt="alternative"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Browser Extension</h4>
              <p>Take your quize with out leaving your browser tab.</p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img
                className="img-fluid"
                src="images/description-2.svg"
                alt="alternative"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Flexible</h4>
              <p>
                create a variety of questions, including multiple-choice
                questions, recall questions and short descriptive questions.
              </p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img
                className="img-fluid"
                src="images/description-3.svg"
                alt="alternative"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">AI Based</h4>
              <p>
                Our aligorithm is Powered by artificial intelligence and machine
                learning algorithms which makes it pretty darn smart.
              </p>
            </div>
          </div>
          {/* end of card */}
        </div>
        {/* end of col */}
      </div>
      {/* end of row */}
    </div>
    {/* end of container */}
  </div>
  {/* end of cards-1 */}
  {/* end of description */}
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-xl-5">
        <div className="image-container">
          <div className="img-wrapper">
            <img
              className="img-fluid"
              src="https://cdn.glitch.com/679ccf85-1841-476d-af16-114eb8aef09c%2Fpreview.png?v=1598707246948"
              alt="alternative"
            />
          </div>
          {/* end of img-wrapper */}
        </div>
        {/* end of image-container */}
      </div>
      {/* end of col */}
      <div className="col-lg-6 col-xl-7">
        <div className="text-container">
          <h2>
            We use AI to generate questions from any text source, such as
            Wikipedia.
          </h2>
          <p className="p-large">
            Use SmartQuiz to study smarter. whether you are student, Hobbyist or
            Teacher smartquiz suits you.
          </p>
        </div>
        {/* end of text-container */}
      </div>
      {/* end of col */}
    </div>
    {/* end of row */}
  </div>
  {/* demo Lightbox 2 */}
  <div
    id="demo-lightbox-2"
    className="lightbox-basic zoom-anim-dialog mfp-hide"
  >
    {/* quiz container */}
    <div id="container">
      <button title="Close (Esc)" type="button" className="mfp-close x-button">
        ×
      </button>
      <form
        id="questtionno-form"
        className="offset-lg-4"
        name="question_num_form"
        data-toggle="validator"
        data-focus="false"
      >
        <div className="form-group text-container">
          <input
            type="number"
            name="noofquestions"
            id="noofquestions"
            placeholder="No of question.."
          />
        </div>
        <div className="form-group form-check">
          <input
            type="radio"
            className="custom-control-input"
            id="defaultInline1"
            name="inlineDefaultRadiosExample"
            defaultChecked
          />
          <label className="custom-control-label" htmlFor="defaultInline1">
            True/false questions
          </label>
        </div>
        <div className="form-group form-check">
          <input
            type="radio"
            className="custom-control-input"
            id="defaultInline2"
            name="inlineDefaultRadiosExample"
            disabled
          />
          <label className="custom-control-label" htmlFor="defaultInline2">
            multiple-choice questions<small>(comming Soon!)</small>
          </label>
        </div>
        <div className="form-group form-check">
          <input
            type="radio"
            className="custom-control-input"
            id="defaultInline3"
            name="inlineDefaultRadiosExample"
            disabled
          />
          <label className="custom-control-label" htmlFor="defaultInline3">
            recall questions<small>(comming Soon!)</small>
          </label>
        </div>
        <button className="btn-outline-sm" type="submit" id="finalgeneratebtn">
          Go
        </button>
      </form>
      <div id="quiz" style={{ display: "none" }}>
        <div id="question" />
        <div id="qImg" />
        <div id="choices">
          {/* <div className="choice" id="A" onclick="checkAnswer('A')" /> */}
          {/* <div className="choice" id="B" onclick="checkAnswer('B')" /> */}
          {/*  <div class="choice" id="C" onclick="checkAnswer('C')"></div> */}
        </div>
        <div id="timer">
          <div id="counter" />
          <div id="btimeGauge" />
          <div id="timeGauge" />
        </div>
        <div id="progress" />
      </div>
      <div
        id="scoreContainer"
        style={{ display: "none" }}
        className="container"
      />
    </div>
    {/* quiz container end*/}
    {/* end of container */}
  </div>
  {/* end of lightbox-basic */}
  {/* end of demo lightbox 2 */}
  {/* Newsletter */}
  <div className="form">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="icon-container">
            <span className="fa-stack">
              <a href="https://www.facebook.com/smartquizme">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="https://twitter.com/smartquizme/">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="https://www.instagram.com/smartquizme/">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            {/*                         <span class="fa-stack">
                      <a href="#your-link">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-linkedin-in fa-stack-1x"></i>
                      </a>
                  </span> */}
          </div>
          {/* end of col */}
        </div>
        {/* end of col */}
      </div>
      {/* end of row */}
    </div>
    {/* end of container */}
  </div>
  {/* end of form */}
  {/* end of newsletter */}
  {/* Footer */}
  <svg
    className="footer-frame"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1920 79"
  >
    <defs>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n          .cls-2 {\n            fill: #ff5900;\n          }\n        "
        }}
      />
    </defs>
    <title>footer-frame</title>
    <path
      className="cls-2"
      d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z"
      transform="translate(0 -0.188)"
    />
  </svg>
  {/* Copyright */}
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className="p-small">Copyright © 2020 SmartQuiz</p>
          <li className="media">
            <div className="media-body">
              <a className="white" href="https://blog.smartquiz.me">
                BLOG
              </a>{" "}
              |
              <a className="white" href="terms-conditions.html">
                Terms &amp; Conditions
              </a>
              |
              <a className="white" href="privacy-policy.html">
                {" "}
                Privacy Policy
              </a>
              |
              <a className="white" href="mailto:contact@smartquiz.me">
                Contact Us
              </a>
            </div>
          </li>
        </div>
        {/* end of col */}
      </div>
      {/* enf of row */}
    </div>
    {/* end of container */}
  </div>
</div>;

    </div>

  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
