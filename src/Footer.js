import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="foot-about">
                                <h2><a className="foot-logo" href="#"><img src="images/foot-logo.png" alt="" /></a></h2>
    
                                <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolo.</p>
    
                                <ul className="d-flex flex-wrap align-items-center">
                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>{/* .foot-about */}
                        </div>{/* .col */}
    
                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <h2>Useful Links</h2>
    
                            <ul>
                                <li><a href="#">Privacy Polticy</a></li>
                                <li><a href="#">Become  a Volunteer</a></li>
                                <li><a href="#">Donate</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Causes</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>{/* .col */}
    
                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <div className="foot-latest-news">
                                <h2>Latest News</h2>
    
                                <ul>
                                    <li>
                                        <h3><a href="#">A new cause to help</a></h3>
                                        <div className="posted-date">MArch 12, 2018</div>
                                    </li>
    
                                    <li>
                                        <h3><a href="#">We love to help people</a></h3>
                                        <div className="posted-date">MArch 12, 2018</div>
                                    </li>
    
                                    <li>
                                        <h3><a href="#">The new ideas for helping</a></h3>
                                        <div className="posted-date">MArch 12, 2018</div>
                                    </li>
                                </ul>
                            </div>{/* .foot-latest-news */}
                        </div>{/* .col */}
    
                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <div className="foot-contact">
                                <h2>Contact</h2>
    
                                <ul>
                                    <li><i className="fa fa-phone"></i><span>+45 677 8993000 223</span></li>
                                    <li><i className="fa fa-envelope"></i><span>office@template.com</span></li>
                                    <li><i className="fa fa-map-marker"></i><span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span></li>
                                </ul>
                            </div>{/* .foot-contact */}
    
                   
                        </div>{/* .col */}
                    </div>{/* .row */}
                </div>{/* .container */}
            </div>{/* .footer-widgets */}
    
            <div className="footer-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="m-0">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
    {/* Copyright &copy<script>document.write(new Date().getFullYear())</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>{/* .col-12 */}
                    </div>{/* .row */}
                </div>{/* .container */}
            </div>{/* .footer-bar */}
        </footer>
        )
    }
}

export default Footer
