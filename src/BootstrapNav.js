import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router'

const NavIcon = props => (
  <div className="col-4 p-0 d-flex justify-content-center">
    <div>
      <div
        className={
          props.isCurrentRoute ? 'mobile-icon active-icon' : 'mobile-icon'
        }
      >
        <Nav.Link href={props.link} style={{ color: 'inherit' }}>
          {' '}
          <FontAwesomeIcon icon={props.icon} />{' '}
        </Nav.Link>
      </div>
      <Nav.Link href={props.link} style={{ color: 'inherit' }}>
        {props.title}
      </Nav.Link>
    </div>
  </div>
)

class BootstrapNav extends Component {
  render() {
    const { location } = this.props

    const isCurrentRoute = (currentLocation, route) => {
      return currentLocation.includes(route)
    }

    return (
      <header className="site-header">
        {console.log(location)}
        <Navbar
          collapseOnSelect
          expand="lg"
          className="nav-bar fixed-top customNav"
          style={{ borderBottom: '1px solid #E0E0E0' }}
        >
          <div className="container">
            <Navbar.Brand
              href="#"
              style={{ fontSize: '24px', display: 'flex' }}
              className="LCLO-Button"
            >
              <img
                src={require('./images/LCLO-Icon.png')}
                style={{ width: '20px', marginRight: '10px', maxHeight: '24px' }}
              ></img>
              <div>LCLO Group</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav className="site-navigation">
                <Nav.Link
                  className={`desktop-nav ${isCurrentRoute(
                    location.pathname,
                    '/capacity_building'
                  ) && 'activeNavLink'}`}
                  href="#capacity_building"
                >
                  Capacity Building
                </Nav.Link>
                <Nav.Link
                  className={`desktop-nav ${isCurrentRoute(
                    location.pathname,
                    '/training'
                  ) && 'activeNavLink'}`}
                  href="#training"
                >
                  Training
                </Nav.Link>
                <Nav.Link
                  className={`desktop-nav ${isCurrentRoute(
                    location.pathname,
                    '/entrepreneurship'
                  ) && 'activeNavLink'}`}
                  href="#entrepreneurship"
                >
                  Entrepreneurship
                </Nav.Link>
                <Nav.Link
                  className={`desktop-nav ${isCurrentRoute(
                    location.pathname,
                    '/news'
                  ) && 'activeNavLink'}`}
                  href="#news"
                >
                  News
                </Nav.Link>
                <Nav.Link
                  className={`desktop-nav ${isCurrentRoute(
                    location.pathname,
                    '/resources'
                  ) && 'activeNavLink'}`}
                  href="#resources"
                >
                  Resources
                </Nav.Link>
                <Nav.Link
                  className={`desktop-nav ${isCurrentRoute(
                    location.pathname,
                    '/points_of_encounter'
                  ) && 'activeNavLink'}`}
                  href="#points_of_encounter"
                  style={{ marginRight: '8px' }}
                >
                  Points Of Encounter
                </Nav.Link>
                <div
                  className="d-flex"
                  style={{
                    borderLeft: '1px solid #D3D3D3',
                    paddingLeft: '8px'
                  }}
                >
                  <Nav.Link
                    className={`desktop-nav ${isCurrentRoute(
                      location.pathname,
                      '/about'
                    ) && 'activeNavLink'}`}
                    href="#about"
                  >
                    Team
                  </Nav.Link>
                  <Nav.Link
                    className={`desktop-nav ${isCurrentRoute(
                      location.pathname,
                      '/contact'
                    ) && 'activeNavLink'}`}
                    href="#contact"
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    className={`desktop-nav ${isCurrentRoute(
                      location.pathname,
                      '/search'
                    ) && 'activeNavLink'}`}
                    href="#search"
                  >
                    <FontAwesomeIcon icon="search" />
                  </Nav.Link>
                </div>

                <div className="mobile-nav container-fluid">
                  <div className="row">
                    <NavIcon
                      isCurrentRoute={isCurrentRoute(
                        location.pathname,
                        '/capacity_building'
                      )}
                      icon={'seedling'}
                      link={'#capacity_building'}
                      title={'Capacity Building'}
                    />

                    <NavIcon
                      isCurrentRoute={isCurrentRoute(
                        location.pathname,
                        '/training'
                      )}
                      icon={'chalkboard-teacher'}
                      link={'#training'}
                      title={'Training'}
                    />

                    <NavIcon
                      isCurrentRoute={isCurrentRoute(
                        location.pathname,
                        '/entrepreneurship'
                      )}
                      icon={'lightbulb'}
                      link={'#entrepreneurship'}
                      title={'Entrepreneurship'}
                    />
                  </div>

                  <div className="row">
                    <NavIcon
                      isCurrentRoute={isCurrentRoute(
                        location.pathname,
                        '/news'
                      )}
                      icon={'newspaper'}
                      link={'#news'}
                      title={'News'}
                    />

                    <NavIcon
                      isCurrentRoute={isCurrentRoute(
                        location.pathname,
                        '/resources'
                      )}
                      icon={'book'}
                      link={'#resources'}
                      title={'Resources'}
                    />

                    <NavIcon
                      isCurrentRoute={isCurrentRoute(
                        location.pathname,
                        '/points_of_encounter'
                      )}
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

                  <div className="row">
                    <NavIcon
                      icon={'search'}
                      link={'#search'}
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

export default withRouter(BootstrapNav)
