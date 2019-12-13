import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MemberCard extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                    <div className="frontside">
                        <div className="card">
                            <div className="card-body text-center">
                                <p><img className=" img-fluid" src="https://www.wiareport.com/wordpress/wp-content/uploads/2017/04/Liza-Cariaga-Lo_0.jpg" alt="card image" /></p>
                                <h4 className="card-title">{this.props.name.toLowerCase()}</h4>
                                <p className="card-text">{this.props.description}</p>
                                <a href="#" className="btn btn-primary btn-sm templateOrange" style={{ border: 'none' }}><i className="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="backside">
                        <div className="card">
                            <div className="card-body text-center mt-4">
                                <h4 className="card-title">{this.props.name}</h4>
                                <p className="card-text"> {this.props.description} </p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fa fa-skype"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
{/* 
                                    <Link to={'/about/' + this.props.member}>
                                         <button className="btn btn-default"> More About Liza </button>
                                    </Link> */}
                                    
                                    <Link to={'/about/' + this.props.member}>
                                         <button className="btn btn-default"> More About Liza </button>
                                    </Link>


                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fa fa-google"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MemberCard
