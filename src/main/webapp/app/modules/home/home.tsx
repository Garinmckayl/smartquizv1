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
                src="content/images/description-1.svg"
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
                src="content/images/description-2.svg"
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
                src="content/images/description-3.svg"
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
  <div className="social-btns">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="icon-container">
            <span className="fa-stack">
              <a href="https://www.facebook.com/smartquizme">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
              </a>
            </span>
            <span className="fa-stack">
              <a href="https://twitter.com/smartquizme/">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
              </a>
            </span>
            <span className="fa-stack">
              <a href="https://www.instagram.com/smartquizme/">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
              </a>
            </span>
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
