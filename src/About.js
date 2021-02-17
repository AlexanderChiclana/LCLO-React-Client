import React, { Component } from 'react'
import Team from './Team'
import scrollToComponent from 'react-scroll-to-component'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div className="single-page about-page">
        <div className="welcome-wrap mobile-padding-top-small">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="welcome-content">
                  <header className="entry-header">
                    <h2 className="entry-title">Who We Are</h2>
                  </header>

                  <div className="entry-content mt-5">
                    <p>
                      The LCLO Group is a collection of industry leading
                      professionals and academics aiming to grow the economy in
                      Southeast Asia. We include members from Harvard, Yale, and
                      Brown University.{' '}
                    </p>  
                  </div>

                  <div className="entry-footer mt-5">
                    <button
                      onClick={() =>
                        scrollToComponent(this.Team, {
                          offset: 0,
                          align: 'top',
                          duration: 1000
                        })
                      }
                      className="btn gradient-bg mr-2"
                      style={{ borderRadius: '24px' }}
                    >
                      Meet the Team
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <img src={require('./images/bridge.JPG')} alt="welcome" />
              </div>
            </div>
          </div>
        </div>

        <section
          id="team"
          className="Team"
          style={{ paddingTop: '150px', paddingBottom: '150px' }}
          ref={section => {
            this.Team = section
          }}
        >
          <Team />
        </section>

        <div
          className="help-us"
          style={{ backgroundColor: '#272521', paddingTop: '140px' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                <h2>Stay up to date with the latest from LCLO</h2>

                <Link to={'/contact'}>
                  <a className="btn orange-border orange-gradient roundButton" href="#">
                    Join Mailing List
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
