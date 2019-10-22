import React, { Component } from 'react'
// import scrollToComponent from 'react-scroll-to-component'

class FeedHero extends Component {
    render() {
        return (
            <div className="home-page-welcome" 
            // ref={(div) => { this.Mission = div }}
            >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title">{this.props.pageName}</h2>
                            </header>{/* .entry-header */}
    
                            <div className="entry-content mt-5">
                                <p>{this.props.description}</p>
                            </div>{/* .entry-content */}
    
                            <div className="entry-footer mt-5">

                                <div onClick={this.props.scrollToBlogpostList } 
                                className="btn gradient-bg mr-2 roundButton"
                                style={{ cursor: 'pointer' }}
                                >New In {this.props.pageName}
                                </div> 

                            </div>{/* .entry-footer */}
                        </div>{/* .welcome-content */}
                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                    {/* <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2 "> */}
                        <img src={require('./images/cityscape.JPG')} alt="welcome" />
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>
        )
    }
}

export default FeedHero
