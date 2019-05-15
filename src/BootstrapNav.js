import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import { Link } from 'react-router-dom'
import SearchWidget from './SearchWidget'
class BootstrapNav extends Component {
    render() {
        return (
            <header className="site-header">

            <Navbar collapseOnSelect expand="lg" className="nav-bar customNav">
                <div className="container">

            <Navbar.Brand href="#" style={{ fontSize: '36px' }}className="LCLO-Button">LCLO Group</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
          

              </Nav>
              <Nav className="site-navigation">

              <NavDropdown alignRight title="Pages" id="basic-nav-dropdown">  
              <NavDropdown.Item href="#capacity_building">Capacity Building</NavDropdown.Item>
              <NavDropdown.Item href="#training">Training</NavDropdown.Item>
              <NavDropdown.Item href="#entrepreneurship">Entrepreneurship</NavDropdown.Item>
              <NavDropdown.Item href="#news">News</NavDropdown.Item>
              <NavDropdown.Item href="#resources">Resources</NavDropdown.Item>
              <NavDropdown.Item href="#points_of_encounter">Points Of Encounter</NavDropdown.Item>
      

              </NavDropdown>
              <Nav.Link className="nav-link" href="#about">Team</Nav.Link>                
              <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>  
              <NavDropdown alignRight title="Search" id="basic-nav-dropdown-align-right">  
   
              <SearchWidget />           
              </NavDropdown>
              </Nav>
              {/* <Nav className="site-navigation">
                <Nav.Link className="nav-link" href="#capacity_building">Capacity Building</Nav.Link>
                <Nav.Link className="nav-link" href="#training">Training</Nav.Link>
                <Nav.Link className="nav-link" href="#entrepreneurship">Entrepreneurship</Nav.Link>
                <Nav.Link className="nav-link" href="#news">News</Nav.Link>
                <Nav.Link className="nav-link" href="#resources">Resources</Nav.Link>
                <Nav.Link className="nav-link" href="#points_of_encounter">Points of Encounter</Nav.Link>
                <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>                
              </Nav> */}
            </Navbar.Collapse>
            </div>
          </Navbar>
          </header>
        )
    }
}

export default BootstrapNav
