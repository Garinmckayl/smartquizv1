import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="page-content">
    <Row>
      <Col md="12">
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
                  <a className="white" href="pages/privacy">
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

      </Col>
    </Row>
  </div>
);

export default Footer;
