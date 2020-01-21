import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const memberData = {
    liza: {},
    lynn: {},
    jennifer: {},
    yen: {},
    jahnvi: {},
    julie: {},
    teresa: {},
    don: {},
    myra: {},
    maria: {},
    alexander: {
        bio: 'Alexander Chiclana is a web developer based in providence RI. He is a graduate of Brown Unviersity, and a former instructor at General Assembly. He joined LCLO as a technical advisor and is working as the front end lead developer at polyPodia.'
    },
    arjun: {}
  }

const memberArray = Object.keys(memberData) 

class MemberPage extends Component {
    render() {
        const { member } = this.props

        const nextMember = member === memberArray.slice(-1)[0] ? memberArray[0] : memberArray[memberArray.indexOf(member) + 1]

        return (
            <div>
            <div className='home-page-divider' />
            
            <div className="container single-page about-page">
       
        
            <div className="welcome-wrap">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-6 order-2 order-lg-1" >
                            <div className="welcome-content" >
                                <header className="entry-header">
                                    <h2 className="entry-title">Alexander Chiclana</h2>
                                </header>
        
                                <div className="entry-content mt-5">
                                    <p>{memberData[member].bio}</p>

                                </div>
        
                                <div className="entry-footer mt-5">
                                    {/* <button onClick={ () => scrollToComponent(this.Team, { offset: 0, align: 'top', duration: 1000 }) } className="btn gradient-bg mr-2">Meet the Team</button> */}
                                </div>

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                     <Link to={'/about'}>
                                 <FontAwesomeIcon
                                     icon='arrow-left'
                                   />
                                 Back to Team
                                    </Link>
                                </div>
                                <div>
                                <Link to={'/about/' + nextMember}>
                                 Next Member { nextMember }
                                 <FontAwesomeIcon
                                     icon='arrow-right'
                                   />
                                </Link>
                                </div>
                            </div>

                        </div>
        
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <img src={require('./images/bridge.JPG')} alt="welcome" />
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className='home-page-divider' />

            </div>
        )
    }
}

export default MemberPage
