import React, { Component } from 'react'
import { NavNavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
        
                 <header className="site-header">
           

           <div className="nav-bar">
               <div className="container">
                   <div className="row">
                       <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                       <NavLink to="/">
                           <div className="site-branding d-flex align-items-center">
      
                                   <a className="d-block"><img className="d-block small-image" src={require('./images/LCLO-Icon.png')} alt="logo" /> </a> 
                                   <div className="LCLO-Button">LCLO Group</div>                    
                            </div>
                            </NavLink>
                           <nav className="site-navigation d-flex justify-content-end align-items-center">
                               <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                   
                                   <li><a href="causes.html">Causes</a></li>
                                   <NavLink activeClassName="current" to="/training" ><li>Training</li></NavLink>
                                   <NavLink to="/capacity_building"><li>Capacity Building</li></NavLink>
                                   <NavLink to="/entrepreneurship"> <li>Entrepreneurship</li></NavLink>
                                   <NavLink to="/news"> <li>News</li></NavLink>
                                   <NavLink to="/resources"><li>Resources</li></NavLink>
                                   <NavLink to="/points_of_encounter"><li>Points of Encounter</li></NavLink>
                                   <NavLink to="/contact"><li>Contact</li></NavLink>
                               </ul>
                           </nav>
   
                           <div className="hamburger-menu d-lg-none">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
                    </header>
        
        )
    }
}

export default NavBar
