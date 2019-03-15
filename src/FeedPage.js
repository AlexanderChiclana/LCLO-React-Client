import React, { Component } from 'react'

class FeedPage extends Component {
    render() {
        return (
            <div className="single-page news-page">
                <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>News</h1>
                 </div>{/* .col */} 
            </div>{/* .row */}
        </div>{/* .container */}
    </div>{/* .page-header */}

    <div className="news-wrap">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8">
                    
                    <div className="news-content">
                        <a href="#"><img src={'http://www.diycollegerankings.com/wp-content/uploads/2014/01/Colleges-for-Asian-Students-fb.jpg'} alt="" /></a>

                        <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                            <div className="header-elements">
                                <div className="posted-date">March 12, 2018</div>

                                <h2 className="entry-title"><a href="#">Toys for Children Campaign</a></h2>

                                <div className="post-metas d-flex flex-wrap align-items-center">
                                    <span className="cat-links">in <a href="#">Causes</a></span>
                                    <span className="post-author">by <a href="#">Tom Phillips</a></span>
                                    <span className="post-comments"><a href="#">3 Comments</a></span>
                                </div>
                            </div>

                            <div className="donate-icon">
                                <a href="#"><img src={require('./images/donate-icon.png')} alt="" /></a>
                            </div>
                        </header>

                        <div className="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamc.</p>
                        </div>

                        <footer className="entry-footer">
                            <a href="#" className="btn gradient-bg">Read More</a>
                        </footer>
                    </div>

                    <div className="news-content">
                        <a href="#"><img src={require('./images/2.jpg')} alt="" /></a>

                        <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                            <div className="header-elements">
                                <div className="posted-date">March 12, 2018</div>

                                <h2 className="entry-title"><a href="#">Toys for Children Campaign</a></h2>

                                <div className="post-metas d-flex flex-wrap align-items-center">
                                    <span className="cat-links">in <a href="#">Causes</a></span>
                                    <span className="post-author">by <a href="#">Tom Phillips</a></span>
                                    <span className="post-comments"><a href="#">3 Comments</a></span>
                                </div>
                            </div>

                            <div className="donate-icon">
                                <a href="#"><img src={require('./images/donate-icon.png')} alt="" /></a>
                            </div>
                        </header>

                        <div className="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamc.</p>
                        </div>

                        <footer className="entry-footer">
                            <a href="#" className="btn gradient-bg">Read More</a>
                        </footer>
                    </div>

                    <div className="news-content">
                        <a href="#"><img src={require('./images/3.jpg')} alt="" /></a>

                        <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                            <div className="header-elements">
                                <div className="posted-date">March 12, 2018</div>

                                <h2 className="entry-title"><a href="#">Toys for Children Campaign</a></h2>

                                <div className="post-metas d-flex flex-wrap align-items-center">
                                    <span className="cat-links">in <a href="#">Causes</a></span>
                                    <span className="post-author">by <a href="#">Tom Phillips</a></span>
                                    <span className="post-comments"><a href="#">3 Comments</a></span>
                                </div>
                            </div>

                            <div className="donate-icon">
                                <a href="#"><img src={require('./images/donate-icon.png')} alt="" /></a>
                            </div>
                        </header>

                        <div className="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamc.</p>
                        </div>

                        <footer className="entry-footer">
                            <a href="#" className="btn gradient-bg">Read More</a>
                        </footer>
                    </div>

                    <ul className="pagination d-flex flex-wrap align-items-center p-0">
                        <li className="active"><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                    </ul>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="sidebar">
                        <div className="search-widget">
                            <form className="flex flex-wrap align-items-center">
                                <input type="search" placeholder="Search..." />
                                <button type="submit" className="flex justify-content-center align-items-center">GO</button>
                            </form>{/* .flex */}
                        </div>{/* .search-widget */}

                        <div className="popular-posts">
                            <h2>Popular Posts</h2>

                            <ul className="p-0">
                                <li className="d-flex flex-wrap justify-content-between align-items-center">
                                    <figure><a href="#"><img src={require('./images/p-1.jpg')} alt="" /></a></figure>

                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="#">A new cause to help</a></h3>

                                        <div className="posted-date">MArch 12, 2018</div>
                                    </div>
                                </li>

                                <li className="d-flex flex-wrap justify-content-between align-items-center">
                                    <figure><a href="#"><img src={require('./images/p-2.jpg')} alt="" /></a></figure>

                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="#">We love to help people</a></h3>

                                        <div className="posted-date">MArch 10, 2018</div>
                                    </div>
                                </li>

                                <li className="d-flex flex-wrap justify-content-between align-items-center">
                                    <figure><a href="#"><img src={require('./images/p-3.jpg')} alt="" /></a></figure>

                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="#">The new ideas for helping</a></h3>

                                        <div className="posted-date">MArch 09, 2018</div>
                                    </div>
                                </li>
                            </ul>
                        </div>{/* .cat-links */}

                        <div className="upcoming-events">
                            <h2>Upcoming Events</h2>

                            <ul className="p-0">
                                <li className="d-flex flex-wrap justify-content-between align-items-center">
                                    <figure><a href="#"><img src={require('./images/u-1.jpg')} alt="" /></a></figure>

                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="#">Fundraiser for Kids</a></h3>

                                        <div className="post-metas d-flex flex-wrap align-items-center">
                                            <span className="posted-date"><a href="#">Aug 25, 2018</a></span>
                                            <span className="event-location"><a href="#">Ball Room New York</a></span>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </li>

                                <li className="d-flex flex-wrap justify-content-between align-items-center">
                                    <figure><a href="#"><img src={require('./images/u-2.jpg')} alt="" /></a></figure>

                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="#">The childrens</a></h3>

                                        <div className="post-metas d-flex flex-wrap align-items-center">
                                            <span className="posted-date"><a href="#">Aug 25, 2018</a></span>
                                            <span className="event-location"><a href="#">Ball Room New York</a></span>
                                        </div>

                                        <p>Consectetur adipiscing elit. Mauris tempus vestib ulum.</p>
                                    </div>
                                </li>

                                <li className="d-flex flex-wrap justify-content-between align-items-center">
                                    <figure><a href="#"><img src={require('./images/u-3.jpg')} alt="" /></a></figure>

                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="#">Bring water </a></h3>

                                        <div className="post-metas d-flex flex-wrap align-items-center">
                                            <span className="posted-date"><a href="#">Aug 25, 2018</a></span>
                                            <span className="event-location"><a href="#">Ball Room New York</a></span>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>{/* .cat-links */}

                        <div className="featured-cause">
                            <h2>Featured Causes</h2>

                            <div className="cause-wrap">
                                <figure className="m-0 position-relative">
                                    <a href="#"><img src={require('./images/cause-3.jpg')} alt="" /></a>
                                </figure>

                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Bring water to the childrens</a></h3>
                                    </header>{/* .entry-header */}

                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
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
                    </div>{/* .sidebar */}
                </div>{/* .col */}
            </div>
        </div>
    </div>
            </div>
        )
    }
}

export default FeedPage
