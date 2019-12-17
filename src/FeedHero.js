import React, { Component } from 'react'
// import scrollToComponent from 'react-scroll-to-component'

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
        // const { image } = this.props

        return (
            <div className="home-page-welcome mobile-padding-small" 
            // ref={(div) => { this.Mission = div }}
            >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="welcome-content">
                            <header className="entry-header">
                                <h2 className="entry-title mobile-heading">{this.props.pageName}</h2>
                            </header>{/* .entry-header */}
    
                            <div className="entry-content mt-sm-5">
                                <p className="mobile-margin-none mobile-line-medium">{this.props.description}</p>
                            </div>{/* .entry-content */}
    
                            <div className="entry-footer my-4 mt-sm-5">

                                <div onClick={this.props.scrollToBlogpostList } 
                                className="btn gradient-bg mr-2 roundButton"
                                style={{ cursor: 'pointer' }}
                                >New In {this.props.pageName}
                                </div> 

                            </div>{/* .entry-footer */}
                        </div>{/* .welcome-content */}
                    </div>{/* .col */}
    
                    <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex align-items-center mobile-padding-small">
                    {/* <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2 "> */}
                        <img src={this.props.image} className="mobile-margin-none" alt="welcome" />
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container */}
        </div>
        )
    }
}

export default FeedHero
