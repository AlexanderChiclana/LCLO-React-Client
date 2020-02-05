import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MailingListForm from './MailingListForm'

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="single-page news-page">
          <div className="page-header mobile-none">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Contact Us</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-page-wrap mobile-padding-bottom-small">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="entry-content mobile-margin-top-medium">
                    <h2>Get In touch with us</h2>

                    <p>
                      We want you to stay connected and be engaged in our work
                      to help impact equitable talent development in the Future
                      of Work initiatives in Southeast Asia. We would welcome
                      the opportunity to speak with you further about our
                      programs and initiatives.
                    </p>

                    <ul className="contact-info p-0">
                      <li>
                        <a
                          href="tel:1-617-770-6583"
                          style={{ color: 'rgb(155, 154, 154)' }}
                        >
                          <FontAwesomeIcon
                            icon="phone"
                            className="footer-icon"
                          />
                          <span>1-617-770-6583</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:lclogroup@lclo.com"
                          style={{ color: 'rgb(155, 154, 154)' }}
                        >
                          <FontAwesomeIcon
                            icon="envelope"
                            className="footer-icon"
                          />
                          <span>lclogroup@lclogroup.com</span>
                        </a>
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon="marker"
                          className="footer-icon"
                        />
                        <span>208 Narragansett Pkwy Warwick, RI 02888</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <MailingListForm />

                <div className="col-12">
                  <div className="contact-gmap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
