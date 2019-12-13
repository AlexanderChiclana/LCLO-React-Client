import React, { Component } from 'react'
import Team from './Team'
import scrollToComponent from 'react-scroll-to-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div className="single-page about-page">
            
                
    {/* <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    </div> */}


    <div className="welcome-wrap">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <div className="welcome-content">
                        <header className="entry-header">
                            <h2 className="entry-title">About our Team</h2>
                        </header>

                        <div className="entry-content mt-5">
                            <p>The LCLO Group is a collection of industry leading professionals and academics aiming to grow the economy in southeast asia. We include members form harvard, yale, and brown university. </p>
                        </div>

                        <div className="entry-footer mt-5">
                            <button onClick={ () => scrollToComponent(this.Team, { offset: 0, align: 'top', duration: 1000 }) } className="btn gradient-bg mr-2">Meet the Team</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 order-1 order-lg-2">
                    <img src={require('./images/bridge.JPG')} alt="welcome" />
                </div>
            </div>
        </div>
    </div>

    {/* <div className='home-page-divider' /> */}


    <section id="team" className="pb-5 Team" 
            
    ref={(section) => { this.Team = section }}>

        <Team />
    </section>


    <div className="about-stats">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-4 col-lg-4">
                    <div className="circular-progress-bar">
                        <div className="circle" id="loader_1">
                            <strong className="d-flex justify-content-center">
                            <FontAwesomeIcon icon={'mail'} />

                            </strong>
                            
                        </div>

                        <h3 className="entry-title">Capacity Building</h3>
                    </div>
                </div>

                <div className="col-12 col-sm-4 col-lg-4">
                    <div className="circular-progress-bar">
                        <div className="circle" id="loader_2">
                            <strong className="d-flex justify-content-center"></strong>
                        </div>

                        <h3 className="entry-title">Training</h3>
                    </div>
                </div>

                <div className="col-12 col-sm-4 col-lg-4">
                    <div className="circular-progress-bar">
                        <div className="circle" id="loader_3">
                            <strong className="d-flex justify-content-center"></strong>
                        </div>

                        <h3 className="entry-title">Entrepreneurship</h3>
                    </div>
                </div>

                {/* <div className="col-12 col-sm-6 col-lg-3">
                    <div className="circular-progress-bar">
                        <div className="circle" id="loader_4">
                            <strong className="d-flex justify-content-center"></strong>
                        </div>

                        <h3 className="entry-title">Good Decisions</h3>
                    </div>
                </div> */}
            </div>
        </div>
    </div>

  <div className="help-us">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                    <h2>Stay up to date with the latest from LCLO</h2>

                    <Link to={'/contact'}>
                     <a className="btn orange-border roundButton" href="#">Join Mailing List</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>

{/* 
    <section id="team" className="pb-5">
    <div className="container">
        <h5 className="section-title h1">Our Team</h5>
        <div className="row">
            <MemberCard name={'Liza Cariaga-Lo'}/>
            <MemberCard name={'Lynn Hernandez'}/>
            <MemberCard name={'Jennifer Nazareno'}/>
            <MemberCard name={'Yen Tran'}/>
            <MemberCard name={'Jahnvi SINGH'}/>
            <MemberCard name={'Julie Lee'}/>
            <MemberCard name={'Teresa Malonzo'}/>
            <MemberCard name={'Don Operario'}/>
            <MemberCard name={'Myra Liwang'}/>
            <MemberCard name={'Maria Paula Garcia Mosquera'}/>
            <MemberCard name={'Alexander Chiclana'}/>
            <MemberCard name={'Arjun Ray'}/>

            </div>
</div>
</section> */}
            </div>
        )
    }
}

export default About
