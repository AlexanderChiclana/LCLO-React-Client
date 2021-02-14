import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FeedHero extends Component {
  state = {
    image: ''
  }

  componentDidMount() {
    this.props.image &&
      this.setState({
        image: this.props.image
      })
  }

  render() {
    return (
      <div
        className={
          'home-page-welcome feed-hero mobile-padding-small tablet-padding-y-medium ' +
          this.props.pageInitial
        }
        // style={{ background: `url(${this.props.image}) no-repeat center` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="welcome-content">
                <header className="entry-header">
                  <h2 className="entry-title mobile-heading">
                    {this.props.pageName}
                  </h2>
                </header>
                {/* .entry-header */}

                <div className="entry-content mt-sm-5">
                  <p
                    className="mobile-margin-none mobile-line-medium"
                    style={{ fontSize: '15px' }}
                  >
                    {this.props.description}
                  </p>

                  <div className="desktop-none">

                      <Link to={'/gsep'}>
                      <div
                        // onClick={this.props.scrollToBlogpostList}
                        className="btn gradient-bg mr-2 roundButton fade-in"
                        style={{ marginTop: '20px', cursor: 'pointer' }}
                      >
                        Global Entrepreneurs Leadership 
                        <br /> Development Program
                      </div>
                      </Link>
                      <Link to={'/sea-future-of-work'}>
                      <div
                        // onClick={this.props.scrollToBlogpostList}
                        className="btn gradient-bg roundButton fade-in"
                        style={{ marginTop: '20px', cursor: 'pointer' }}

                      >
                         (SEA) Future of Work Institute <br /> Fellows Program
                      </div>
                      </Link>
                    </div>
                </div>
                {/* .entry-content */}

                <div className="entry-footer my-4 mt-sm-5">
                {this.props.pageName !== 'Training' && (

                  <div
                    onClick={this.props.scrollToBlogpostList}
                    className="btn gradient-bg mr-2 roundButton fade-in"
                    style={{ cursor: 'pointer' }}
                  >
                    New In {this.props.pageName}
                  </div>
                )}

                  {/* {this.props.pageName === 'Training' && (
                    <React.Fragment>
                      <div
                        onClick={this.props.scrollToBlogpostList}
                        className="btn gradient-bg mr-2 roundButton fade-in"
                        style={{ cursor: 'pointer' }}
                      >
                        Global Entrepreneurs Leadership<br /> Development Program
                      </div>
                      <div
                        onClick={this.props.scrollToBlogpostList}
                        className="btn gradient-bg mt-2 roundButton fade-in"
                        style={{ cursor: 'pointer' }}
                      >
                         (SEA) Future of Work Institute <br /> Fellows Program
                      </div>
                    </React.Fragment>
                  )} */}
                </div>
                {/* .entry-footer */}
              </div>
              {/* .welcome-content */}
            </div>
            {/* .col */}

            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-wrap align-items-center mobile-padding-small">
              <img
                src={this.props.image}
                className="mobile-margin-none"
                alt={this.props.image}
              />

{this.props.pageName === 'Training' && (
                      <div className="tablet-none">
                      <Link to={'/gsep'}>
                      <div
                        // onClick={this.props.scrollToBlogpostList}
                        className="btn gradient-bg mr-2 mb-2 roundButton fade-in"
                        style={{ cursor: 'pointer', maxWidth: '100%' }}
                      >
                        Global Entrepreneurs Leadership Development
                      </div>
                      </Link>
                      <Link to={'/sea-future-of-work'}>
                      <div
                        // onClick={this.props.scrollToBlogpostList}
                        className="btn gradient-bg roundButton fade-in"
                        style={{ cursor: 'pointer' }}
                      >
                         (SEA) Future of Work Institute Fellows Program
                      </div>
                      </Link>
                      </div>
                  )}

            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>
    )
  }
}

export default FeedHero
