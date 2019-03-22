import React, { Component } from 'react'

class FeaturedCause extends Component {
    render() {
        return (
          
            <div className="featured-cause">
            <h2>Featured Causes</h2>

            <div className="cause-wrap">
                <figure className="m-0 position-relative">
                    <a href="#"><img src={require('./images/classroom.jpg')} alt="" /></a>
                </figure>

                <div className="cause-content-wrap">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                        <h3 className="entry-title w-100 m-0"><a href="#">LCLO + PolyPodia Pilot Program</a></h3>
                    </header>{/* .entry-header */}

                    <div className="entry-content">
                        <p className="m-0">We will be launching a pilot program of our course to a select group of students in SE Asia. This will take advantage of the polyPodia LMS in a classroom setting</p>
                    </div>{/* .entry-content */}

                    <div className="fund-raised w-100">
                        <div className="fund-raised-bar-3 barfiller">
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
                </div>{/* .cause-content-wrap */}
            </div>{/* .cause-wrap */}
        </div>
        )
    }
}

export default FeaturedCause
