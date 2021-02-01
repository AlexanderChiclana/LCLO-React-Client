import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

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
      <Nav.Link
        href={props.link}
        style={{ color: 'inherit', textAlign: 'center' }}
      >
        {props.title}
      </Nav.Link>
    </div>
  </div>
)

class BootstrapNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    }
    this.showRef = React.createRef()
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset

    const isExpanded = this.showRef.current
      .getAttribute('class')
      .includes('show')

    const visible =
      prevScrollpos > currentScrollPos || currentScrollPos < 150 || isExpanded

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    })
  }

  render() {
    const { location } = this.props

    const isCurrentRoute = (currentLocation, route) => {
      return currentLocation.includes(route)
    }

    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-bar fixed-top customNav"
        style={{
          // borderBottom: '1px solid #E0E0E0',
          boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2)',
          fontFamily: 'raleway, sans-serif',
          fontSize: '12px',
          transition: 'top 300ms, opacity 200ms',
          // opacity: this.state.visible ? 1 : 0,
          top: this.state.visible ? '0px' : '-80px'
        }}
      >
        <div className="container">
          <Navbar.Brand
            href="#"
            style={{ fontSize: '24px', display: 'flex', alignItems: 'center' }}
            className="LCLO-Button tablet-center"
          >
            <img
              src={require('./images/LCLO-Icon.png')}
              style={{ width: 'auto', marginRight: '10px', maxHeight: '20px' }}
            ></img>
            <div className="LCLO-title">LCLO GROUP</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" ref={this.showRef}>
            <Nav className="mr-auto"></Nav>
            <Nav className="site-navigation">
        
{/* 
              <Nav.Link
                className={`desktop-nav ${isCurrentRoute(
                  location.pathname,
                  '/training'
                ) && 'activeNavLink'}`}
                href="#training"
              >
                Training
              </Nav.Link> */}

              <NavDropdown title="Training" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">
                  <Link to={'/training'}>
                  All Programs

                  </Link>
                  </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item eventKey="4.2">
                <Link to={'/training/gsep'}>
                  GSEP
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                <Link to={'/training/sea-future-of-work'}>

                  SEA 
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

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
              {/* <Nav.Link
                  className={`desktop-nav ${isCurrentRoute(
                    location.pathname,
                    '/points_of_encounter'
                  ) && 'activeNavLink'}`}
                  href='#points_of_encounter'
                  style={{ marginRight: '8px' }}
                >
                  Points Of Encounter
                </Nav.Link> */}
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
                    isCurrentRoute={isCurrentRoute(location.pathname, '/news')}
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
                  <NavIcon icon={'search'} link={'#search'} title={'Search'} />

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
    )
  }
}

export default withRouter(BootstrapNav)
