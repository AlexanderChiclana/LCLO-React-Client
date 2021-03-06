import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MemberCard extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div className="mainflip">
                    <div className="frontside">
                        <div className="card" style={{ borderRadius: '24px' }}>
                            <div className="card-body text-center" style={{ width: '100%' }}>
                                <p><img className=" img-fluid" src={this.props.headshot} alt="card image" style={{ objectFit: 'cover' }}/></p>
                                <h4 className="card-title">{this.props.name}</h4>
                                <p className="card-text">{this.props.description}</p>
                                <div className="d-flex justify-content-center">
                            <div
                              className="templateOrange"
                              style={{ borderRadius: '20px', display: 'block', width: '10px', height: '5px' }}
                            >
                              </div>
                            </div>                            </div>
                        </div>
                    </div>
                    <div className="backside" style={{ borderRadius: '24px', width: '100%' }}>
                        <div className="card" style={{ borderRadius: '24px' }}>
                            <div className="card-body text-center mt-4">
                                <h4 className="card-title">{this.props.name}</h4>
                                <p className="card-text" style={{ width: '100%' }}> {this.props.description} </p>
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

                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                            <i className="fa fa-google"></i>
                                        </a>
                                </ul>
                                <Link to={'/about/' + this.props.member}>
                                         <button className="btn btn-default" 
                                                style={{ 
                                                        borderRadius: '24px',
                                                        border: 'none',
                                                        padding: '15px',
                                                        fontSize: '16px',
                                                        fontWeight: 400  
                                          
                                          }}> About {this.props.name.split(' ')[0]} </button>
                                    </Link>
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
