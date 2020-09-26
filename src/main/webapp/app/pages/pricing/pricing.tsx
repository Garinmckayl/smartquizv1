import React from 'react';
import { Translate, translate } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Alert, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';



const Pricing = props => (
  <div className="footer page-content">
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* Free Tier */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              Free
            </h5>
            <h6 className="card-price text-center">
              $0<span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Unlimited Questions
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                True/False questions
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Import text in different Formats
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Multiple Choice Questions(5 per day)
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times" />
                </span>
                Recall Type Questions
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times" />
                </span>
                Share Questions
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times" />
                </span>
                Export As a Pdf
              </li>
            </ul>
            <a href="#" className="btn btn-block btn-primary text-uppercase">
              Get Started For Free
            </a>
          </div>
        </div>
      </div>
      {/* Plus Tier */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              Plus
            </h5>
            <h6 className="card-price text-center">
              $9<span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                <strong>Unlimited Questions</strong>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                True/False questions
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Import text in different Formats
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Recall Type Questions
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Multiple Choice Questions
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Share Questions
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Export As a Pdf
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times" />
                </span>
                For Schools And Universties
              </li>
            </ul>
            <a href="#" className="btn btn-block btn-primary text-uppercase">
              Comming Soon
            </a>
          </div>
        </div>
      </div>
      {/* Pro Tier */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              Institution Edition
            </h5>
            <h6 className="card-price text-center">
              $49<span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-star" />
                </span>
                <strong>For Schools And Universties</strong>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-star" />
                </span>
                <strong>All Pluse Features Included</strong>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Question Based on Levels: Easy, Medium, Hard
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Free Subdomains
              </li>
            </ul>
            <a href="#" className="btn btn-block btn-primary text-uppercase">
              Comming Soon
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;

  </div>
);

export default Pricing;
