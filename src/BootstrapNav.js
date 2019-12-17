import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import { Link } from 'react-router-dom'
// import SearchWidget from './SearchWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import NavLink from 'react-bootstrap/NavLink'

const NavIcon = props => (
  <div className='col-4 p-0 d-flex justify-content-center'>
    <div>
      <div className='mobile-icon'>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <Nav.Link href={props.link}>{props.title}</Nav.Link>
    </div>
  </div>
)

// const SearchIcon = props => (
//   <div className='col-4 p-0 d-flex justify-content-center'>
//     <div>
//       <div className='mobile-icon'>
//         <FontAwesomeIcon icon='search' />
//       </div>
//       <NavDropdown
//         alignRight
//         title='Search'
//         id='basic-nav-dropdown-align-right'
//       >
//         <SearchWidget />
//       </NavDropdown>
//     </div>
//   </div>
// )

class BootstrapNav extends Component {
  render() {
    return (
      <header className='site-header'>
        <Navbar
          collapseOnSelect
          expand='lg'
          className='nav-bar fixed-top customNav'

          style={{ borderBottom: '1px solid #E0E0E0'
          }}
        >
          <div className='container'>
            <Navbar.Brand
              href='#'
              style={{ fontSize: '24px' }}
              className='LCLO-Button'
            >
              LCLO Group
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>

              <Nav className='mr-auto'></Nav>
              <Nav className='site-navigation'>

                <Nav.Link className='desktop-nav' href='#capacity_building'>Capacity Building</Nav.Link>
                <Nav.Link className='desktop-nav' href='#training'>Training</Nav.Link>
                <Nav.Link className='desktop-nav' href='#entrepreneurship'>Entrepreneurship</Nav.Link>
                <Nav.Link className='desktop-nav' href='#news'>News</Nav.Link>
                <Nav.Link className='desktop-nav' href='#resources'>Resources</Nav.Link>
                <Nav.Link className='desktop-nav' href='#points_of_encounter'>Points Of Encounter</Nav.Link>
                <Nav.Link className='desktop-nav nav-link' href='#about'>Team</Nav.Link>
                <Nav.Link className='desktop-nav nav-link' href='#contact'>Contact</Nav.Link>

                <div className='mobile-nav container-fluid' >
                  <div className='row'>
                    <NavIcon
                      icon={'seedling'}
                      link={'#capacity_building'}
                      title={'Capacity Building'}
                    />

                    <NavIcon
                      icon={'chalkboard-teacher'}
                      link={'#training'}
                      title={'Training'}
                    />

                    <NavIcon
                      icon={'lightbulb'}
                      link={'#entrepreneurship'}
                      title={'Entrepreneurship'}
                    />
                  </div>

                  <div className='row'>
                    <NavIcon icon={'newspaper'} link={'#news'} title={'News'} />

                    <NavIcon
                      icon={'book'}
                      link={'#resources'}
                      title={'Resources'}
                    />

                    <NavIcon
                      icon={'map-marked'}
                      link={'#points_of_encounter'}
                      title={'Encounters'}
                    />
                  </div>

                  <div
                    style={{
                      width: '100%',
                      marginTop: '20px',
                      backgroundColor: '#d3d3d3',
                      height: '1px'
                    }}
                  />

                  {/* <NavDropdown
                    alignRight
                    title='Search'
                    id='basic-nav-dropdown-align-right'
                  >
                    <SearchWidget />
                  </NavDropdown> */}

                  <div className='row'>
                    {/* <SearchIcon /> */}
                    <NavIcon 
                      icon={'search'}
                      link={'#search/s'}
                      title={'Search'}
                    />

                    <NavIcon
                      icon={'info-circle'}
                      link={'#about'}
                      title={'About'}
                    />
                    <NavIcon
                      icon={'envelope'}
                      link={'#contact'}
                      title={'Contact'}
                    />
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    )
  }
}

export default BootstrapNav
