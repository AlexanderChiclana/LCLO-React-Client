import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'
import UpcomingEvents from './UpcomingEvents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import apiUrl from './apiConfig'

const FeedPageTile = props => (
  <div className="col-12 col-md-4 col-lg-4 mt-4 mt-lg-0">
    <Link to={props.link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="icon-box" style={{ width: '100%' }}>
        <figure className="d-flex justify-content-center">
          <FontAwesomeIcon icon={props.icon} style={{ fontSize: '50px' }} />
        </figure>

        <header className="entry-header">
          <h3 className="entry-title">{props.title}</h3>
        </header>

        <div className="entry-content" style={{ textAlign: 'center' }}>
          <p>{props.description} </p>
        </div>
      </div>
    </Link>
  </div>
)

const TileSection = () => (
  <div className="home-page-icon-boxes">
    <div className="container">
      <div className="row">
        <FeedPageTile
          title={'Entrepreneurship'}
          link={'/Entrepreneurship'}
          icon={'newspaper'}
          description={
            'We work intentionally with promising entrepreneurs and their communities to provide mentorship, training, network development, and infrastructure building to support the development of innovative products that can eventually be produced, marketed, and sold locally and globally.'
          }
        />
        <FeedPageTile
          title={'Resources'}
          link={'/resources'}
          icon={'book'}
          description={
            'We develop uniquely tailored digital systems and online materials which can effectively support higher education institutions and other entities who are engaged in talent development, research infrastructure building, training and community engagement endeavors in the ASEAN region. '
          }
        />
        <FeedPageTile
          title={'Capacity Building'}
          link={'/capacity_building'}
          icon={'map-marked'}
          description={
            'We offer hands-on, one-on-one coaching and group consultations to higher education leaders and institutions seeking to innovate in the areas of student recruitment and talent development, faculty development, curricular reform, research infrastructure, pipeline programs, and evaluation/metrics'
          }
        />
      </div>
      {/* .row */}
    </div>
  </div>
)

class Home extends Component {
  state = {
    loaded: false,
    upcoming: []
  }

  componentDidMount() {
    this.getUpcomingEvents()
    this.setState({ loaded: true })
  }

  getUpcomingEvents = () => {
    axios.get('https://cdn.contentful.com/spaces/5babw3v5cb9l/environments/master/entries?access_token=tT0wH4gdjnRMag6VTNIhIQtOw2A0QR-L6iSeekeNuNM&content_type=event&fields.date[gte]=2021-02-16').then(res => {
      this.setState({
        upcoming: res.data.items
      })
    })
  }

  render() {
    return (
      <div>
        <div className="swiper-container hero-slider mobile-none tablet-none">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide hero-content-wrap"
              style={{ maxHeight: '95vh', minHeight: '400px' }}
            >
              {/* <img src={require('./images/temple.jpg')} /> */}

              <img
                src="https://images.unsplash.com/photo-1516264665768-5525834929bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80"
                alt=""
              />

              {/* <img src='https://images.unsplash.com/photo-1546955121-d0ba64964e34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80' alt="" /> */}

              {/* <img src='https://images.unsplash.com/photo-1433704334812-6c45b0b8784d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80' alt="" /> */}
              {/* <img src={require('./images/skyscrapers.JPG')} alt="welcome" /> */}

              <div
                className="hero-content-overlay position-absolute w-100 h-100"
                style={{ maxHeight: '95vh', minHeight: '400px' }}
              >
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="col-12  d-flex flex-column justify-content-center align-items-start">
                      <header className="entry-header fade-in-full">
                        <h1>LCLO Group</h1>
                        {/* <h4>4 a better world</h4> */}
                      </header>
                      {/* .entry-header */}

                      <div className="entry-content mt-4 fade-in medium-header">
                        <p>
                          Cultivating Talent and Innovating Solutions to the
                          Future of Work
                        </p>
                      </div>
                      {/* .entry-content */}

                      <footer
                        className="entry-footer d-flex flex-wrap align-items-center mt-5"
                        style={{ zIndex: 20 }}
                      >
                        <Link
                          to={'/contact'}
                          href="#"
                          className="btn gradient-bg mr-2 roundButton fade-in-2"
                        >
                          Contact Us
                        </Link>
                        <div
                          onClick={() =>
                            scrollToComponent(this.Mission, {
                              offset: 0,
                              align: 'middle',
                              duration: 500
                            })
                          }
                          className="btn orange-border text-white roundButton fade-in-3"
                          style={{ cursor: 'pointer', zIndex: 20 }}
                        >
                          Our Mission
                        </div>

                        {/* <a href="#" className="btn orange-border">Our Mission</a> */}
                      </footer>
                      {/* .entry-footer */}
                    </div>
                    {/* .col */}
                  </div>
                  {/* .row */}
                </div>
                {/* .container */}
              </div>
              {/* .hero-content-overlay */}
            </div>
          </div>
          {/* .swiper-wrapper */}

          <div className="pagination-wrap position-absolute w-100">
            <div className="container">
              <div className="swiper-pagination"></div>
            </div>
            {/* .container */}
          </div>
          {/* .pagination-wrap */}

          {/* Add Arrows */}
          {/* <div className="swiper-button-next flex justify-content-center align-items-center">
                <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></span>
            </div>
    
            <div className="swiper-button-prev flex justify-content-center align-items-center">
                <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></span>
            </div> */}
        </div>{' '}
        {/* .hero-slider */}
        {/* 
        <section id="team" className="pb-5 Team" ref={(section) => { this.Team = section }}>

<Team />
</section> */}
        {/* <div className="home-page-divider mobile-none tablet-none"></div> */}
        <div
          className="home-page-welcome cp-background mobile-padding-small tablet-homepage-panel"
          ref={div => {
            this.Mission = div
          }}
        >
          <div
            className="home-page-divider mobile-none tablet-none"
            style={{ position: 'absolute', top: '-5px' }}
          />

          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="welcome-content">
                  <header className="entry-header">
                    <h2 className="entry-title mobile-heading">
                      Welcome to the LCLO Group
                    </h2>
                  </header>
                  {/* .entry-header */}

                  <div className="entry-content mt-4 mt-md-5 mobile-line-medium small-font">
                    <p>
                      The LCLO Group, LLC operates collaboratively with
                      public-private partners (higher education experts,
                      corporate leaders, and public and non-profit agencies) to
                      develop and implement solutions to more equitable global
                      workforce development, talent cultivation, and training
                      opportunities and resources within the context of emerging
                      regional economies.
                    </p>
                  </div>
                  {/* .entry-content */}

                  <div className="entry-footer my-4 mt-md-5 ">
                    <Link to="/about">
                      {' '}
                      <div className="btn gradient-bg mr-2 roundButton">
                        About Us
                      </div>{' '}
                    </Link>
                  </div>
                  {/* .entry-footer */}
                </div>
                {/* .welcome-content */}
              </div>
              {/* .col */}

              <div className="col-12 col-lg-6 order-1 order-lg-2 mobile-padding-small">
                <img
                  src={require('./images/train.jpg')}
                  className="mobile-margin-none"
                  alt="welcome"
                />
              </div>
              {/* .col */}
            </div>
            {/* .row */}

            {/* <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title mobile-heading">Capacity Building for Entrepreneurs</h2>
                            </header>
    
                            <div className="entry-content mt-4 mt-md-5  mobile-line-medium small-font">
                                <p>The LCLO Group offers hands-on, one-on-one coaching and group consultations to higher education leaders and institutions seeking to build, expand and/or innovate in the areas of student recruitment and talent development, faculty development, curricular reform, research infrastructure, pipeline programs, and evaluation/metrics. </p>
                            </div>
    
                            <div className="entry-footer my-4 mt-md-5">
                              <Link to="/capacity_building">    <div className="btn gradient-bg mr-2 roundButton" >Capacity Building</div> </Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-12 col-lg-6 order-1 order-lg-2 mobile-padding-small">
                        <img src={require('./images/skyscrapers.JPG')} className="mobile-margin-none" alt="welcome" />
                    </div>
                </div> */}
          </div>
          {/* .container */}
        </div>
        {/* .home-page-icon-boxes */}
        {/* section for next intro, reverse  */}
        {/* <div className="home-page-divider mobile-none"></div> */}
        <div
          className="home-page-welcome mobile-padding-small tablet-homepage-panel"
          id="home-page-alt"
        >
          <div className="container">
            <div className="row mt-5 ">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="welcome-content">
                  <header className="entry-header">
                    <h2 className="entry-title dark-font mobile-heading">
                      Training Programs for the Workforce of Tomorrow
                    </h2>
                  </header>
                  {/* .entry-header */}

                  <div className="entry-content mt-4 mt-md-5 dark-font mobile-line-medium small-font">
                    <p>
                      The LCLO Group provides opportunities for individuals to
                      participate in professionally relevant and essential
                      training and leadership development in preparation for
                      meaningful and impactful work as strategists and
                      specialists across different fields and sectors, essential
                      to jobs in the Fourth Industrial Revolution.
                    </p>
                  </div>
                  {/* .entry-content */}

                  {/* <div className="entry-footer my-4 mt-md-5">
                              <Link to="/gsep">    <div className="btn gradient-bg mr-2 roundButton" >More About GSEP</div> </Link>
                            </div> */}
                </div>
                {/* .welcome-content */}
              </div>
              {/* .col */}

              <div className="col-12 col-lg-6 order-1 order-lg-2 mobile-padding-small">
                <img
                  src={require('./images/cityscape.JPG')}
                  className="mobile-margin-none"
                  alt="welcome"
                />
              </div>
              {/* .col */}
            </div>
            {/* .row */}

            {/* <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1 mobile-padding-small">
                    <img src={require('./images/cityscape.JPG')} className="mobile-margin-none" alt="welcome" />

                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">

                        <div className="welcome-content">
                            
                            <header className="entry-header ">
                                <h2 className="entry-title dark-font mobile-heading">Training Programs for the Workforce of Tomorrow</h2>
                            </header>
    
                            <div className="entry-content  mt-4 mt-md-5  dark-font mobile-line-medium small-font">
                                <p className="mobile-margin-none">The LCLO Group provides opportunities for individuals to participate in professionally relevant and essential training and leadership development in preparation for meaningful and impactful work as strategists and specialists across different fields and sectors, essential to jobs in the Fourth Industrial Revolution.</p>
                            </div>
    
                            <div className="entry-footer my-4 mt-md-5 d-flex justify-content-end">
                              <Link to="/training"><div className="btn gradient-bg mr-2 roundButton">All Programs</div> </Link>
                            </div>
                        </div>
                    </div>
                </div> */}

            <div className="row inner-welcome tablet-col-reverse">
              <div className="col-12 col-lg-6 order-2 order-lg-1 mobile-padding-small">
                <img
                  src={require('./images/working.jpg')}
                  className="mobile-margin-none"
                  alt="welcome"
                />
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <div className="welcome-content">
                  <header className="entry-header ">
                    <h2 className="entry-title dark-font mobile-heading">
                      Southeast Asia Future of Work Institute Fellows Program
                    </h2>
                  </header>

                  <div className="entry-content  mt-4 mt-md-5  dark-font mobile-line-medium small-font">
                    <p className="mobile-margin-none">
                      Individuals may apply to participate in the one-year
                      intensive Southeast Asia (SEA) Future of Work Institute
                      Fellows Program.
                    </p>
                  </div>

                  <div className="entry-footer my-4 mt-md-5 d-flex justify-content-end">
                    <Link to="/sea-future-of-work">
                      <div className="btn gradient-bg mr-2 roundButton">
                        Learn more and apply
                      </div>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row tablet-col-reverse">
              <div className="col-12 col-lg-6 order-2 order-lg-1 mobile-padding-small">
                <img
                  src={require('./images/stem.jpg')}
                  className="mobile-margin-none"
                  alt="welcome"
                />
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <div className="welcome-content">
                  <header className="entry-header ">
                    <h2 className="entry-title dark-font mobile-heading">
                      Global Science Education Pathways (GSEP)
                    </h2>
                  </header>

                  <div className="entry-content  mt-4 mt-md-5  dark-font mobile-line-medium small-font">
                    <p className="mobile-margin-none">
                      The Global Science Education Pathways (GSEP) Program is a
                      learner-focused, inquiry based and interdisciplinary
                      approach to science, technology, engineering and
                      mathematics (STEM) learning. This innovative program will
                      bring together a cohort of highly talented high school
                      students (current 10th and 11th graders prior to summer
                      year of participation) to engage them in learning STEM
                      through the lenses of Fourth Industrial Revolution (4IR)
                      technological advances, within a problem-based learning
                      (PBL) curriculum environment.
                    </p>
                  </div>

                  <div className="entry-footer my-4 mt-md-5 d-flex justify-content-end">
                    <Link to="/gsep">
                      <div className="btn gradient-bg mr-2 roundButton">
                        More about GSEP program
                      </div>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* .container */}
        </div>
        {/* .home-page-icon-boxes */}
        {/* <div className="home-page-divider mobile-none"></div> */}
        {/* third section */}
        {/* 
        <div className="home-page-welcome cb-background mobile-padding-small tablet-homepage-panel">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title mobile-heading">Capacity Building for Entrepreneurs</h2>
                            </header>
    
                            <div className="entry-content mt-4 mt-md-5  mobile-line-medium small-font">
                                <p>The LCLO Group offers hands-on, one-on-one coaching and group consultations to higher education leaders and institutions seeking to build, expand and/or innovate in the areas of student recruitment and talent development, faculty development, curricular reform, research infrastructure, pipeline programs, and evaluation/metrics. </p>
                            </div>
    
                            <div className="entry-footer my-4 mt-md-5">
                              <Link to="/capacity_building">    <div className="btn gradient-bg mr-2 roundButton" >Capacity Building</div> </Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-12 col-lg-6 order-1 order-lg-2 mobile-padding-small">
                        <img src={require('./images/skyscrapers.JPG')} className="mobile-margin-none" alt="welcome" />
                    </div>
                </div>
            </div>
        </div>
     */}
        {/* end section  */}
        <TileSection />
        {/* <div className="container">
                    <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title mobile-heading">Capacity Building for Entrepreneurs</h2>
                            </header>
    
                            <div className="entry-content mt-4 mt-md-5  mobile-line-medium small-font">
                                <p>The LCLO Group offers hands-on, one-on-one coaching and group consultations to higher education leaders and institutions seeking to build, expand and/or innovate in the areas of student recruitment and talent development, faculty development, curricular reform, research infrastructure, pipeline programs, and evaluation/metrics. </p>
                            </div>
    
                            <div className="entry-footer my-4 mt-md-5">
                              <Link to="/capacity_building">    <div className="btn gradient-bg mr-2 roundButton" >Capacity Building</div> </Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-12 col-lg-6 order-1 order-lg-2 mobile-padding-small">
                        <img src={require('./images/skyscrapers.JPG')} className="mobile-margin-none" alt="welcome" />
                    </div>
                </div>
            </div> */}
        {/* mailing list */}
        <div className="help-us">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                <h2>Stay up to date with the latest from LCLO</h2>

                <Link to={'/contact'} className="btn orange-border roundButton">
                  Join Mailing List
                </Link>

                {this.state.upcoming.length > 0 && (
                  <div
                    style={{
                      color: 'black',
                      backgroundColor: 'white',
                      borderRadius: '15px',
                      padding: '15px',
                      marginTop: '90px',
                      width: '100%'
                    }}
                  >
                    <UpcomingEvents home={true} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* end mailing */}
      </div>
    )
  }
}

export default Home
