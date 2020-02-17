import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'
import UpcomingEvents from './UpcomingEvents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import apiUrl from './apiConfig'

const FeedPageTile = (props) => (

    <div className="col-12 col-md-4 col-lg-4 mt-4 mt-lg-0">
                <Link to={props.link} style={{ textDecoration: 'none', color: 'inherit' }}>

    <div className="icon-box" style={{ width: '100%' }}>
        <figure className="d-flex justify-content-center">
        <FontAwesomeIcon icon={props.icon} style={{ fontSize: '50px' }}/>

        </figure>

        <header className="entry-header">
            <h3 className="entry-title">{props.title}</h3>
        </header>

        <div className="entry-content">
            {/* <p>{props.description} </p> */}
        </div>
    </div>
    </Link>

</div>
)

const TileSection = () => (
    <div className="home-page-icon-boxes">
    <div className="container">
        <div className="row">

            <FeedPageTile title={'News'} link={'/news'} icon={'newspaper'} description={'this is the description'}/>
            <FeedPageTile title={'Resources'} link={'/resources'} icon={'book'} description={'this is the description'}/>
            <FeedPageTile title={'Points of Encounter'} link={'/points_of_encounter'} icon={'map-marked'} description={'this is the description'}/>

        </div>{/* .row */}
    </div>
</div>
)

class Home extends Component {
    state = {
        upcoming: []
    }

    componentDidMount() {
        this.getUpcomingEvents()
      }

      getUpcomingEvents = () => {
        axios.get(`${apiUrl}/upcoming`)
          .then(res => {
            this.setState({ 
                upcoming: res.data.calendar
            })
          })
      }

    render() {
        return (
            <div>
            <div className="swiper-container hero-slider mobile-none tablet-none">
            <div className="swiper-wrapper">
                <div className="swiper-slide hero-content-wrap">

                {/* <img src={require('./images/temple.jpg')} /> */}
                
                <img src='https://images.unsplash.com/photo-1516264665768-5525834929bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80' alt="" />

                {/* <img src='https://images.unsplash.com/photo-1546955121-d0ba64964e34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80' alt="" /> */}

                    {/* <img src='https://images.unsplash.com/photo-1433704334812-6c45b0b8784d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80' alt="" /> */}
                    {/* <img src={require('./images/skyscrapers.JPG')} alt="welcome" /> */}

    
                    <div className="hero-content-overlay position-absolute w-100 h-100">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                    <header className="entry-header">
                                        <h1>LCLO Group</h1>
                                        {/* <h4>4 a better world</h4> */}
                                    </header>{/* .entry-header */}
    
                                    <div className="entry-content mt-4">
                                        <p>Cultivating Talent and Innovating Solutions to the Future of Work in Southeast Asia
    
                                        </p>
                                    </div>{/* .entry-content */}
    
                                    <footer className="entry-footer d-flex flex-wrap align-items-center mt-5" style={{ zIndex: 20 }}>
                                        <Link to={'/contact'} href="#" className="btn gradient-bg mr-2 roundButton">Contact Us</Link>
                                        <div onClick={ () => scrollToComponent(this.Mission, { offset: 0, align: 'middle', duration: 500 }) } className="btn orange-border text-white roundButton" style={{ cursor: 'pointer', zIndex: 20 }}>Our Mission</div>

                                        {/* <a href="#" className="btn orange-border">Our Mission</a> */}
                                    </footer>{/* .entry-footer */}
                                </div>{/* .col */}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </div>{/* .hero-content-overlay */}
                </div>
    
    
           
            </div>{/* .swiper-wrapper */}
    
            <div className="pagination-wrap position-absolute w-100">
                <div className="container">
                    <div className="swiper-pagination"></div>
                </div>{/* .container */}
            </div>{/* .pagination-wrap */}
    
            {/* Add Arrows */}
            {/* <div className="swiper-button-next flex justify-content-center align-items-center">
                <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></span>
            </div>
    
            <div className="swiper-button-prev flex justify-content-center align-items-center">
                <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></span>
            </div> */}
        </div> {/* .hero-slider */}
    
    
{/* 
        <section id="team" className="pb-5 Team" ref={(section) => { this.Team = section }}>

<Team />
</section> */}
        <div className="home-page-divider mobile-none tablet-none"></div>

        <div className="home-page-welcome cp-background mobile-padding-small tablet-homepage-panel" ref={(div) => { this.Mission = div }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title mobile-heading">Welcome to the LCLO Group</h2>
                            </header>{/* .entry-header */}
    
                            <div className="entry-content mt-4 mt-md-5 mobile-line-medium">
                                <p>The LCLO Group, LLC operates collaboratively with public-private partners (higher education experts, corporate leaders, and public and non-profit agencies) to develop and implement solutions to more equitable global workforce development, talent cultivation, and training opportunities and resources within the context of emerging regional economies of Southeast Asia (ASEAN region).</p>
                            </div>{/* .entry-content */}
    
                            <div className="entry-footer my-4 mt-md-5 ">
                              <Link to="/about">    <div className="btn gradient-bg mr-2 roundButton">About Us</div> </Link>
                            </div>{/* .entry-footer */}
                        </div>{/* .welcome-content */}
                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6 order-1 order-lg-2 mobile-padding-small">
                        <img src={require('./images/train.jpg')} className="mobile-margin-none" alt="welcome" />
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>{/* .home-page-icon-boxes */}
    
        {/* section for next intro, reverse  */}

        <div className="home-page-divider mobile-none"></div>

        <div className="home-page-welcome mobile-padding-small tablet-homepage-panel" id="home-page-alt">
            <div className="container">
                <div className="row tablet-col-reverse">
                    <div className="col-12 col-lg-6 order-2 order-lg-1 mobile-padding-small">
                    <img src={require('./images/cityscape.JPG')} className="mobile-margin-none" alt="welcome" />

                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6 order-1 order-lg-2">

                        <div className="welcome-content">
                            
                            <header className="entry-header ">
                                <h2 className="entry-title dark-font mobile-heading">Training the Workforce of Tomorrow</h2>
                            </header>{/* .entry-header */}
    
                            <div className="entry-content  mt-4 mt-md-5  dark-font mobile-line-medium">
                                <p className="mobile-margin-none">The LCLO Group provides opportunities for individuals to participate in professionally relevant and essential training and leadership development in preparation for meaningful and impactful work as strategists and specialists across different fields and sectors, essential to jobs in the Fourth Industrial Revolution.</p>
                            </div>{/* .entry-content */}
    
                            <div className="entry-footer my-4 mt-md-5 d-flex justify-content-end">
                              <Link to="/training"><div className="btn gradient-bg mr-2 roundButton">Our Training</div> </Link>
                            </div>{/* .entry-footer */}
                        </div>{/* .welcome-content */}
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>{/* .home-page-icon-boxes */}

        <div className="home-page-divider mobile-none"></div>
        {/* third section */}

        <div className="home-page-welcome cb-background mobile-padding-small tablet-homepage-panel">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title mobile-heading">Capcity Building for Entrepreneurs</h2>
                            </header>{/* .entry-header */}
    
                            <div className="entry-content mt-4 mt-md-5  mobile-line-medium">
                                <p>The LCLO Group offers hands-on, one-on-one coaching and group consultations to higher education leaders and institutions seeking to build, expand and/or innovate in the areas of student recruitment and talent development, faculty development, curricular reform, research infrastructure, pipeline programs, and evaluation/metrics. </p>
                            </div>{/* .entry-content */}
    
                            <div className="entry-footer my-4 mt-md-5">
                              <Link to="/capacity_building">    <div className="btn gradient-bg mr-2 roundButton" >Capacity Building</div> </Link>
                            </div>{/* .entry-footer */}
                        </div>{/* .welcome-content */}
                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6 order-1 order-lg-2 mobile-padding-small">
                        <img src={require('./images/skyscrapers.JPG')} className="mobile-margin-none" alt="welcome" />
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>{/* .home-page-icon-boxes */}
        <div className="home-page-divider mobile-none"></div>

        {/* end section  */}
        <TileSection />

{/* mailing list */}
        <div className="help-us">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                    <h2>Stay up to date with the latest from LCLO</h2>

                    <Link to={'/contact'} className="btn orange-border roundButton">
                     Join Mailing List
                    </Link>

                    {
                        this.state.upcoming.length > 0 &&
                    <div style={{ color: 'black', backgroundColor: 'white', borderRadius: '15px', padding: '15px', marginTop: '90px', width: '100%' }}>                    
                        <UpcomingEvents home={true} /> 
                    </div>
                    }
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
