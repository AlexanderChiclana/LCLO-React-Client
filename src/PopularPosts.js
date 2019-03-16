import React, { Component } from 'react'

class PopularPosts extends Component {
    render() {
        return (
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
        </div>
        )
    }
}

export default PopularPosts
