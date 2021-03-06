import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
// import apiUrl from './apiConfig'
import { Link } from 'react-router-dom'
// import format from 'date-format'
import dateFormat from 'dateformat'

class Footer extends Component {
  constructor() {
    super()

    this.state = {
      newsPosts: []
    }
  }

  componentDidMount() {
    this.getAllNewsPosts()
  }

  getAllNewsPosts = () => {
    axios
      .get(
        'https://cdn.contentful.com/spaces/5babw3v5cb9l/environments/master/entries?access_token=tT0wH4gdjnRMag6VTNIhIQtOw2A0QR-L6iSeekeNuNM&content_type=blogpost&fields.page[all]=news&limit=3&order=-sys.createdAt'
      )

      .then(res => {
        this.setState({ newsPosts: res.data.items })
      })
  }

  render() {
    const recentNews = this.state.newsPosts.map((newsPost, i) => (
      <li key={i}>
        <h3>
          <Link to={'/posts/' + newsPost.sys.id}>
            {' '}
            {newsPost.fields.heading}
          </Link>{' '}
        </h3>
        <div className="posted-date">
          {/* {newsPost.sys.createdAt} */}
          {dateFormat(newsPost.sys.createdAt, 'mediumDate')}
        </div>
        {console.log(dateFormat)}
      </li>
    ))

    return (
      <footer className="site-footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-4">
                <div className="foot-about">
                  <h2>Mission</h2>

                  <p>
                    The LCLO Group, LLC operates collaboratively with
                    public-private partners (higher education experts, corporate
                    leaders, and public and non-profit agencies) to develop and
                    implement solutions to more equitable global workforce
                    development, talent cultivation, and training opportunities
                    and resources within the context of emerging regional
                    economies
                  </p>
                </div>
                {/* .foot-about */}
              </div>
              {/* .col */}

              <div className="col-12 col-md-4 col-lg-2 mt-5 mt-md-0">
                <h2>Site Links</h2>

                <ul className="foot-site-links">
                  <h3>
                    {' '}
                    <li>
                      <Link to="/capacity_building">Capacity Building</Link>{' '}
                    </li>
                  </h3>
                  <h3>
                    {' '}
                    <li>
                      <Link to="/training">Training</Link>
                    </li>
                  </h3>
                  <h3>
                    {' '}
                    <li>
                      <Link to="/entrepreneurship">Entrepreneurship</Link>
                    </li>
                  </h3>
                  <h3>
                    {' '}
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                  </h3>
                  <h3>
                    {' '}
                    <li>
                      <Link to="/gsep">GSEP</Link>
                    </li>
                  </h3>
                  <h3>
                    {' '}
                    <li>
                      <Link to="/sea-future-of-work">
                        SEA Future of Work Fellowship
                      </Link>
                    </li>
                  </h3>
                </ul>
              </div>
              {/* .col */}

              <div className="col-12 col-md-8 col-lg-3 mt-5 mt-md-0">
                <div className="foot-latest-news">
                  <h2>Latest News</h2>

                  <ul>{recentNews}</ul>
                </div>
                {/* .foot-latest-news */}
              </div>
              {/* .col */}

              <div className="col-12 col-md-4 col-lg-3 mt-5 mt-md-0">
                <div className="foot-contact">
                  <h2>Contact</h2>

                  <ul>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/LCLOGroup/?__tn__=%2Cd%2CP-R&eid=ARBHoooeqsSFMV1-0moN7FR1DT4q7fMmr0UyQkkjqFGFR59kNk6ZmhAx6uzUfiaq74tmGY8d-yL-iwEI"
                      >
                        <FontAwesomeIcon
                          icon={['fab', 'facebook']}
                          className="footer-icon"
                        />
                        <span>Facebook</span>
                      </a>
                    </li>

                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/LCLOGroup"
                      >
                        <FontAwesomeIcon
                          icon={['fab', 'twitter']}
                          className="footer-icon"
                        />
                        <span>Twitter</span>
                      </a>
                    </li>

                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/lclo-group/"
                      >
                        <FontAwesomeIcon
                          icon={['fab', 'linkedin']}
                          className="footer-icon"
                        />
                        <span>LinkedIn</span>
                      </a>
                    </li>

                    <li>
                      <a href="tel:1-401-302-4024">
                        <FontAwesomeIcon icon="phone" className="footer-icon" />
                        <span>1-401-302-4024</span>
                      </a>
                    </li>

                    <li>
                      <a href="mailto:lclogroup@lclo.com">
                        <FontAwesomeIcon
                          icon="envelope"
                          className="footer-icon"
                        />
                        <span>lclogroup@lclogroup.com</span>
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon icon="marker" className="footer-icon" />
                      <span>208 Narragansett Pkwy Warwick, RI 02888</span>
                    </li>
                  </ul>
                </div>
                {/* .foot-contact */}
              </div>
              {/* .col */}
            </div>
            {/* .row */}
          </div>
          {/* .container */}
        </div>
        {/* .footer-widgets */}

        <div className="footer-bar">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="m-0">
                © LCLO Group 2019, developed by Alexander Chiclana
                </p>
              </div>
              {/* .col-12 */}
            </div>
            {/* .row */}
          </div>
          {/* .container */}
        </div>
        {/* .footer-bar */}
      </footer>
    )
  }
}

export default Footer
