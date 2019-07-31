import React, { Component } from 'react'

class MemberPage extends Component {
    render() {
        return (
            
            <div className="container single-page about-page">
            <div className='home-page-divider'>
            </div>
        
            <div className="welcome-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            <div className="welcome-content">
                                <header className="entry-header">
                                    <h2 className="entry-title">Alexander Chiclana</h2>
                                </header>
        
                                <div className="entry-content mt-5">
                                    <p>Alexander Chiclana is a web developer based in providence RI. He is a graduate of Brown Unviersity, and a former instructor at General Assembly. He joined LCLO as a technical advisor and is working as the front end lead developer at polyPodia.</p>
                                </div>
        
                                <div className="entry-footer mt-5">
                                    {/* <button onClick={ () => scrollToComponent(this.Team, { offset: 0, align: 'top', duration: 1000 }) } className="btn gradient-bg mr-2">Meet the Team</button> */}
                                </div>
                            </div>
                        </div>
        
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <img src={require('./images/bridge.JPG')} alt="welcome" />
                        </div>
                    </div>
                </div>
            </div>

            </div>
        )
    }
}

export default MemberPage
