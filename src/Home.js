import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'

class Home extends Component {
    render() {
        return (
            <div>
            <div className="swiper-container hero-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide hero-content-wrap">
                    <img src='https://et-website.s3.amazonaws.com/uploads/2015/04/Bhutan-Paro-TigersNest.jpg' alt="" />
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
    
                                    <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                        <a href="#" className="btn gradient-bg mr-2">Contact Us</a>
                                        <div onClick={ () => scrollToComponent(this.Mission, { offset: 0, align: 'top', duration: 1000 }) } className="btn orange-border text-white">Our Mission</div>

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
    
        {/* <div className="home-page-icon-boxes">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                        <div className="icon-box active">
                            <figure className="d-flex justify-content-center">
                                <img src={require('./images/hands-gray.png')} alt="" />
                                <img src={require('./images/hands-white.png')} alt="" />
                            </figure>
    
                            <header className="entry-header">
                                <h3 className="entry-title">Become a Volunteer</h3>
                            </header>
    
                            <div className="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <figure className="d-flex justify-content-center">
                                <img src={require('./images/donation-gray.png')} alt="" />
                                <img src={require('./images/donation-white.png')} alt="" />
                            </figure>
    
                            <header className="entry-header">
                                <h3 className="entry-title">Dance & Music</h3>
                            </header>
    
                            <div className="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <figure className="d-flex justify-content-center">
                                <img src={require('./images/charity-gray.png')} alt="" />
                                <img src={require('./images/charity-white.png')} alt="" />
                            </figure>
    
                            <header className="entry-header">
                                <h3 className="entry-title">Online Conference</h3>
                            </header>
    
                            <div className="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                            </div>
                        </div>
                    </div>
                </div>{/* .row */}
            {/* </div>
        </div> */}
    
{/* 
        <section id="team" className="pb-5 Team" ref={(section) => { this.Team = section }}>

<Team />
</section> */}

        <div className="home-page-welcome" ref={(div) => { this.Mission = div }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title">Welcome to the LCLO Group</h2>
                            </header>{/* .entry-header */}
    
                            <div className="entry-content mt-5">
                                <p>The LCLO Group, LLC operates collaboratively with public-private partners (higher education experts, corporate leaders, and public and non-profit agencies) to develop and implement solutions to more equitable global workforce development, talent cultivation, and training opportunities and resources within the context of emerging regional economies of Southeast Asia (ASEAN region).</p>
                            </div>{/* .entry-content */}
    
                            <div className="entry-footer mt-5">
                              <Link to="/about">    <div className="btn gradient-bg mr-2">About Us</div> </Link>
                            </div>{/* .entry-footer */}
                        </div>{/* .welcome-content */}
                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
                        <img src={require('./images/cityscape.JPG')} alt="welcome" />
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>{/* .home-page-icon-boxes */}
    
        {/* section for next intro, reverse  */}

        <div className="home-page-welcome" id="home-page-alt">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <img src={require('./images/cityscape.JPG')} alt="welcome" />

                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">

                        <div className="welcome-content">
                            <header className="entry-header ">
                                <h2 className="entry-title" id="entry-title-alt">Training the Workforce of Tomorrow</h2>
                            </header>{/* .entry-header */}
    
                            <div className="entry-content mt-5">
                                <p>The LCLO Group, LLC operates collaboratively with public-private partners (higher education experts, corporate leaders, and public and non-profit agencies) to develop and implement solutions to more equitable global workforce development, talent cultivation, and training opportunities and resources within the context of emerging regional economies of Southeast Asia (ASEAN region).</p>
                            </div>{/* .entry-content */}
    
                            <div className="entry-footer mt-5 d-flex justify-content-end">
                              <Link to="/training"><div className="btn gradient-bg mr-2">Our Training</div> </Link>
                            </div>{/* .entry-footer */}
                        </div>{/* .welcome-content */}
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>{/* .home-page-icon-boxes */}


        {/* third section */}

        <div className="home-page-welcome">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title">Capcity Building for Entrepreneurs</h2>
                            </header>{/* .entry-header */}
    
                            <div className="entry-content mt-5">
                                <p>The LCLO Group, LLC operates collaboratively with public-private partners (higher education experts, corporate leaders, and public and non-profit agencies) to develop and implement solutions to more equitable global workforce development, talent cultivation, and training opportunities and resources within the context of emerging regional economies of Southeast Asia (ASEAN region).</p>
                            </div>{/* .entry-content */}
    
                            <div className="entry-footer mt-5">
                              <Link to="/capacity_building">    <div className="btn gradient-bg mr-2">Capacity Building</div> </Link>
                            </div>{/* .entry-footer */}
                        </div>{/* .welcome-content */}
                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
                        <img src={require('./images/skyscrapers.JPG')} alt="welcome" />
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>{/* .home-page-icon-boxes */}

        {/* end section  */}

{/* mailing list */}
        <div className="help-us">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                    <h2>Joing Mailing List</h2>

                    <a className="btn orange-border" href="#">Donate now</a>
                </div>
            </div>
        </div>
    </div>
{/* end mailing */}

        <div className="home-page-events">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="upcoming-events">
                            <div className="section-heading">
                                <h2 className="entry-title">Upcoming Events</h2>
                            </div>{/* .section-heading */}
    
                            <div className="event-wrap d-flex flex-wrap justify-content-between">
                                <figure className="m-0">
                                    <img src={require('./images/event-1.jpg')} alt="" />
                                </figure>
    
                                <div className="event-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Fundraiser for Kids</a></h3>
    
                                        <div className="posted-date">
                                            <a href="#">Aug 25, 2018 </a>
                                        </div>{/* .posted-date */}
    
                                        <div className="cats-links">
                                            <a href="#">Ball Room New York</a>
                                        </div>{/* .cats-links */}
                                    </header>{/* .entry-header */}
    
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                                    </div>{/* .entry-content */}
    
                                    <div className="entry-footer">
                                        <a href="#">Read More</a>
                                    </div>{/* .entry-footer */}
                                </div>{/* .event-content-wrap */}
                            </div>{/* .event-wrap */}
    
                            <div className="event-wrap d-flex flex-wrap justify-content-between">
                                <figure className="m-0">
                                    <img src={require('./images/event-2.jpg')} alt="" />
                                </figure>
    
                                <div className="event-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Bring water to the childrens</a></h3>
    
                                        <div className="posted-date">
                                            <a href="#">Aug 25, 2018 </a>
                                        </div>{/* .posted-date */}
    
                                        <div className="cats-links">
                                            <a href="#">Ball Room New York</a>
                                        </div>{/* .cats-links */}
                                    </header>{/* .entry-header */}
    
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                                    </div>{/* .entry-content */}
    
                                    <div className="entry-footer">
                                        <a href="#">Read More</a>
                                    </div>{/* .entry-footer */}
                                </div>{/* .event-content-wrap */}
                            </div>{/* .event-wrap */}
    
                            <div className="event-wrap d-flex flex-wrap justify-content-between">
                                <figure className="m-0">
                                    <img src={require('./images/event-3.jpg')} alt="" />
                                </figure>
    
                                <div className="event-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Bring water to the childrens</a></h3>
    
                                        <div className="posted-date">
                                            <a href="#">Aug 25, 2018 </a>
                                        </div>{/* .posted-date */}
    
                                        <div className="cats-links">
                                            <a href="#">Ball Room New York</a>
                                        </div>{/* .cats-links */}
                                    </header>{/* .entry-header */}
    
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                                    </div>{/* .entry-content */}
    
                                    <div className="entry-footer">
                                        <a href="#">Read More</a>
                                    </div>{/* .entry-footer */}
                                </div>{/* .event-content-wrap */}
                            </div>{/* .event-wrap */}
                        </div>{/* .upcoming-events */}
                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6">
                        <div className="featured-cause">
                            <div className="section-heading">
                                <h2 className="entry-title">Featured Cause</h2>
                            </div>{/* .section-heading */}
    
                            <div className="cause-wrap d-flex flex-wrap justify-content-between">
                                <figure className="m-0">
                                    <img src={require('./images/featured-causes.jpg')} alt="" />
                                </figure>
    
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Fundraiser for Kids</a></h3>
    
                                        <div className="posted-date">
                                            <a href="#">Aug 25, 2018 </a>
                                        </div>{/* .posted-date */}
    
                                        <div className="cats-links">
                                            <a href="#">Ball Room New York</a>
                                        </div>{/* .cats-links */}
                                    </header>{/* .entry-header */}
    
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>{/* .entry-content */}
    
                                    <div className="entry-footer mt-5">
                                        <a href="#" className="btn gradient-bg mr-2">Donate Now</a>
                                    </div>{/* .entry-footer */}
                                </div>{/* .cause-content-wrap */}
    
                                <div className="fund-raised w-100">
                                    <div className="featured-fund-raised-bar barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>{/* .tipWrap */}
    
                                        <span className="fill" data-percentage="83"></span>
                                    </div>{/* .fund-raised-bar */}
    
                                    <div className="fund-raised-details d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fund-raised-total mt-4">
                                            Raised: $56 880
                                        </div>{/* .fund-raised-total */}
    
                                        <div className="fund-raised-goal mt-4">
                                            Goal: $70 000
                                        </div>{/* .fund-raised-goal */}
                                    </div>{/* .fund-raised-details */}
                                </div>{/* .fund-raised */}
                            </div>{/* .cause-wrap */}
                        </div>{/* .featured-cause */}
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>{/* .home-page-events */}
    
    
        <div className="home-page-limestone">
            <div className="container">
                <div className="row align-items-end">
                    <div className="coL-12 col-lg-6">
                        <div className="section-heading">
                            <h2 className="entry-title">We love to help all the children that have problems in the world. After 15 years we have many goals achieved.</h2>
    
                            <p className="mt-5">Dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet.</p>
                        </div>{/* .section-heading */}
                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6">
                        <div className="milestones d-flex flex-wrap justify-content-between">
                            <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                                <div className="counter-box">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={require('./images/teamwork.png')} alt="" />
                                    </div>
    
                                    <div className="d-flex justify-content-center align-items-baseline">
                                        <div className="start-counter" data-to="120" data-speed="2000"></div>
                                        <div className="counter-k"></div>
                                    </div>
    
                                    <h3 className="entry-title">Points Of Encounter</h3>{/* entry-title */}
                                </div>{/* counter-box */}
                            </div>{/* .col */}
    
                            <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                                <div className="counter-box">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={require('./images/donation.png')} alt="" />
                                    </div>
    
                                    <div className="d-flex justify-content-center align-items-baseline">
                                        <div className="start-counter" data-to="79" data-speed="2000"></div>
                                    </div>
    
                                    <h3 className="entry-title">Capacity Building</h3>{/* entry-title */}
                                </div>{/* counter-box */}
                            </div>{/* .col */}
    
                            <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                                <div className="counter-box">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={require('./images/dove.png')} alt="" />
                                    </div>
    
                                    <div className="d-flex justify-content-center align-items-baseline">
                                        <div className="start-counter" data-to="253" data-speed="2000"></div>
                                    </div>
    
                                    <h3 className="entry-title">Volunteeres</h3>{/* entry-title */}
                                </div>{/* counter-box */}
                            </div>{/* .col */}
                        </div>{/* .milestones */}
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>{/* .our-causes */}
            </div>
        )
    }
}

export default Home
