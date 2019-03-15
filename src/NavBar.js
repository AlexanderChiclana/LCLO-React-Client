import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
        
                 <header className="site-header">
           

           <div className="nav-bar">
               <div className="container">
                   <div className="row">
                       <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                           <div className="site-branding d-flex align-items-center">
      
                                   <a className="d-block" href="index.html" rel="home"><img className="d-block small-image" src={require('./images/LCLO-Icon.png')} alt="logo" /> </a> 
                                   <a href="index.html"> LCLO Group</a>                       
                            </div>
   
                           <nav className="site-navigation d-flex justify-content-end align-items-center">
                               <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                   <li className="current-menu-item"><a href="index.html">Home</a></li>
                                   <li><a href="about.html">About us</a></li>
                                   <li><a href="causes.html">Causes</a></li>
                                   <li><a href="portfolio.html">Gallery</a></li>
                                   <li><a href="news.html">News</a></li>
                                   <li><a href="contact.html">Contact</a></li>
                               </ul>
                           </nav>
   
                           <div classNameName="hamburger-menu d-lg-none">
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
