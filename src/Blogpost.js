import React, { Component } from 'react'
import DOMPurify from 'dompurify'
import { Link } from 'react-router-dom'

class Blogpost extends Component {
    render() {
        return (
            <div className="news-content">
            <a href="#"><img src={'http://www.diycollegerankings.com/wp-content/uploads/2014/01/Colleges-for-Asian-Students-fb.jpg'} alt="" /></a>

            <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                <div className="header-elements">

                    <div className="posted-date">{this.props.date}</div>

                    <h2 className="entry-title">
                    <Link to={'/posts/' + this.props.id}>
                         {this.props.heading}
                    </Link>
                    
                    {/* <a href="#" dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(this.props.heading) }}></a> */}
                    
                    </h2>

                    <div className="post-metas d-flex flex-wrap align-items-center">
                        <span className="cat-links">in <a href="#">{this.props.page}</a></span>
                        <span className="post-author">by <a href="#">Tom Phillips</a></span>
                        <span className="post-comments"><a href="#">3 Comments</a></span>
                    </div>
                </div>

                <div className="donate-icon">
                    <a href="#"><img src={require('./images/donate-icon.png')} alt="" /></a>
                </div>
            </header>

            <div className="entry-content">
                <p dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(this.props.text) }} ></p>
            </div>

            <footer className="entry-footer">
                <a href="#" className="btn gradient-bg">Read More</a>
            </footer>
        </div>
        )
    }
}

export default Blogpost
