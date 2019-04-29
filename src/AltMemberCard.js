import React, { Component } from 'react'

class AltMemberCard extends Component {
    render() {
        return (
            <div className="col-md-4">
            <div className="card card-profile">
                <div className="card-avatar">
                    <a href="#"> <img className="img" src="../../../../templates/HTML/images/3.png" alt="" /> </a>
                </div>
                <div className="table">
                    <h4 className="card-caption">Patrick Wood</h4>
                    <h6 className="category text-muted">CEO / Co-Founder</h6>
                    <p className="card-description">Dont be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is...</p>
                    <div className="ftr"> <a href="#" className="btn btn-just-icon btn-pinterest btn-round"><i className="fa fa-pinterest"></i>
                        </a> <a href="#" className="btn btn-just-icon btn-twitter btn-round"><i className="fa fa-twitter"></i></a> <a href="#" className="btn btn-just-icon btn-dribbble btn-round"><i className="fa fa-dribbble"></i></a> </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AltMemberCard
