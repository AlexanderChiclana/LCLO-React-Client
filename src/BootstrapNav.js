import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import { Link } from 'react-router-dom'

class BootstrapNav extends Component {
    render() {
        return (
            <header className="site-header">

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="nav-bar customNav">
                <div className="container">

            <Navbar.Brand href="#">LCLO Group</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav className="site-navigation">
                <Nav.Link className="nav-link" href="#capacity_building">Capacity Building</Nav.Link>
                <Nav.Link className="nav-link" href="#training">Training</Nav.Link>
                <Nav.Link className="nav-link" href="#entrepreneurship">Entrepreneurship</Nav.Link>
                <Nav.Link className="nav-link" href="#news">News</Nav.Link>
                <Nav.Link className="nav-link" href="#resources">Resources</Nav.Link>
                <Nav.Link className="nav-link" href="#points_of_encounter">Points of Encounter</Nav.Link>
                <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>                
              </Nav>
            </Navbar.Collapse>
            </div>
          </Navbar>
          </header>
        )
    }
}

export default BootstrapNav
