import './privacy.scss';
import React from 'react';
import { Translate, translate } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Alert, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

  const Privacy = props => (

<div className="ex-basic-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-container">
          <h3>Private Data We Receive And Collect</h3>
          <p>
            SmartQuiz.me also automatically collects and receives certain
            information from your computer or mobile device, including the
            activities you perform on our Website, the Platforms, and the
            Applications, the type of hardware and software you are using (for
            example, your operating system or browser), and information obtained
            from cookies. For example, each time you visit the Website or
            otherwise use the Services, we automatically collect your IP
            address, browser and device type, access times, the web page from
            which you came, the regions from which you navigate the web page,
            and the web page(s) you access (as applicable). There is more to
            this section and we want to keep you informed about it.
          </p>
          <p>
            When you first register for a SmartQuiz.me account, and when you use
            the Services, we collect some
            <a className="blue" href="#your-link">
              Personal Information
            </a>{" "}
            about you such as:
          </p>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled li-space-lg indent">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    The geographic area where you use your computer and mobile
                    devices should be the same with the one of your software
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Your full name, username, and email address and other
                    contact details should be provided in the contact forms
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    A unique SmartQuiz.me user ID (an alphanumeric string) which
                    is assigned to you upon registration should always be at
                    front
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Every system is backuped regularly and it will not fail
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Your IP Address and, when applicable, timestamp related to
                    your consent and confirmation of consent but please make
                    sure it does
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Other information submitted by you or your organizational
                    representatives via various methods and practiced techniques
                  </div>
                </li>
              </ul>
            </div>
            {/* end of col */}
            <div className="col-md-6">
              <ul className="list-unstyled li-space-lg indent">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Your billing address and any necessary other information to
                    complete any financial transaction, and when making
                    purchases through the Services, we may also collect your
                    credit card or PayPal information or any other sensitive
                    data that you consider
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    User generated content (such as messages, posts, comments,
                    pages, profiles, images, feeds or communications exchanged
                    on the Supported Platforms that can be used)
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Images or other files that you may publish via our Services
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    Information (such as messages, posts, comments, pages,
                    profiles, images) we may receive relating to communications
                    you send us, such as queries or comments concerning
                  </div>
                </li>
              </ul>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of text-container*/}
        <div className="text-container">
          <h3>How We Use SmartQuiz.me Landing Page Data</h3>
          <p>
            SmartQuiz.me Landing Page Template uses visitors' data for the
            following general purposes and for other specific ones that are
            important:
          </p>
          <ol className="li-space-lg">
            <li>
              To identify you when you login to your account so we can start or
              user security process for the entire session and duration
            </li>
            <li>
              To enable us to operate the Services and provide them to you
              without fear of losing precious confidential information of your
              users
            </li>
            <li>
              To verify your transactions and for purchase confirmation,
              billing, security, and authentication (including security tokens
              for communication with installed). Always take security measures
              like not saving passwords in your browser or writing them down
            </li>
            <li>
              To analyze the Website or the other Services and information about
              our visitors and users, including research into our user
              demographics and user behaviour in order to improve our content
              and Services
            </li>
            <li>
              To contact you about your account and provide customer service
              support, including responding to your comments and questions
            </li>
            <li>
              To share aggregate (non-identifiable) statistics about users of
              the Services to prospective advertisers and partners
            </li>
            <li>
              To keep you informed about the Services, features, surveys,
              newsletters, offers, surveys, newsletters, offers, contests and
              events we think you may find useful or which you have requested
              from us
            </li>
            <li>
              To sell or market SmartQuiz.me Landing Page products and services
              to you or in other parts of the world where legislation is less
              restrictive
            </li>
            <li>
              To better understand your needs and the needs of users in the
              aggregate, diagnose problems, analyze trends, improve the features
              and usability of the Services, and better understand and market to
              our customers and users
            </li>
            <li>
              To keep the Services safe and secure for everyone using the app
              from administrators to regular users with limited rights
            </li>
            <li>
              We also use non-identifiable information gathered for statistical
              purposes to keep track of the number of visits to the Services
              with a view to introducing improvements and improving usability of
              the Services. We may share this type of statistical data so that
              our partners also understand how often people use the Services, so
              that they, too, may provide you with an optimal experience.
            </li>
          </ol>
        </div>
        {/* end of text-container */}
        <div className="text-container">
          <h3>Customer Content We Process For Customers</h3>
          <p>
            SmartQuiz.me is a HTML landing page template tool. By its nature,
            Services enable our customers to promote their products and services
            integrate with hundreds of business applications that they already
            use, all in one place. Customer security is our primary focus in
            this document.
          </p>
          <p>
            Services help our customers promote their products and services,
            marketing and advertising; engaging audiences; scheduling and
            publishing messages; and analyze the results and improve the
            security levels in all areas of the application.
          </p>
        </div>
        {/* end of text container */}
        <div className="text-container">
          <h3>Consent Of Using SmartQuiz.me Landing Page</h3>
          <p>
            By using any of the Services, or submitting or collecting any
            Personal Information via the Services, you consent to the
            collection, transfer, storage disclosure, and use of your Personal
            Information in the manner set out in this Privacy Policy. If you do
            not consent to the use of your Personal Information in these ways,
            please stop using the Services should be safe and easy to guarantee
            a great user experience.
          </p>
        </div>
        {/* end of text-container */}
      </div>
      {/* end of row */}
      <a className="btn-outline-reg" href="index.html">
        BACK
      </a>
    </div>
    {/* end of col*/}
  </div>
  {/* end of row */}
</div>


  );

  export default Privacy;



