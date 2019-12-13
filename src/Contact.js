import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MailingListForm from './MailingListForm'

class Contact extends Component {
    render() {
        return (
            <div>
            <div className="single-page news-page">
            <div className="page-header mobile-none">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>
        </div>

            <div className="contact-page-wrap mobile-padding-bottom-small">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className="entry-content mobile-margin-top-medium">
                            <h2>Get In touch with us</h2>
    
                            <p>We want you to stay connected and be engaged in our work to help impact equitable talent development in the Future of Work initiatives in Southeast Asia. We would welcome the opportunity to speak with you further about our programs and initiatives.</p>
    
                            {/* <ul className="contact-social d-flex flex-wrap align-items-center">
                                <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul> */}
    
                            <ul className="contact-info p-0">
                                    <li> <FontAwesomeIcon icon="phone" className="footer-icon"/><span>+45 677 8993000 223</span></li>
                                    <li> <FontAwesomeIcon icon="envelope" className="footer-icon"/><span>lclogroup@lclogroup.com</span></li>
                                    <li> <FontAwesomeIcon icon="marker" className="footer-icon"/><span>208 Narragansett Pkwy Warwick, RI 02888</span></li>
                            </ul>
                        </div>
                    </div>
    
                    {/* <div className="col-12 col-lg-7">
                        <form className="contact-form">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea rows="15" cols="6" placeholder="Messages"></textarea>
    
                            <span>
                                <input className="btn gradient-bg" type="submit" value="Contact us" />
                            </span>
                        </form>
    
                    </div> */}
                <MailingListForm />

                    <div className="col-12">
                        <div className="contact-gmap">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        )
    }
}

export default Contact
