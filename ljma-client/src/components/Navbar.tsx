import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import LJMANavBrand from '../images/logos/LJMA Black(trimmed).png'

import { charcoal, offBlack } from '../constants/Colors'
import { Link } from 'react-router-dom'
const nb = () => {
  return (
    <Navbar
      bg='light'
      // style={{ backgroundColor: charcoal, color: 'white', width: '100%' }}
      // bg={charcoal}
      expand='lg'
    >
      <Navbar.Brand href='/'>
        <img
          src={LJMANavBrand}
          alt='Laura JEan Music Academy Brand mark'
          width='100px'
        />
      </Navbar.Brand>
      <Navbar.Toggle
        className='navbar-light'
        aria-controls='basic-navbar-nav'
      />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav
          className='mr-auto float-right'
          style={{
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <Link to='/home'>
            <Nav.Link
              className='liberation-sans-bold'
              style={{ color: offBlack }}
            >
              HOME
            </Nav.Link>
          </Link>
          <Nav.Link
            href='https://squadharmonix.com/academy'
            className='liberation-sans-bold'
            style={{ color: offBlack }}
          >
            SQUAD ACADEMY
          </Nav.Link>

          <Nav.Link
            href='https://squadharmonix.com/harmonix'
            className='liberation-sans-bold'
            style={{ color: offBlack }}
          >
            SQUAD HARMONIX&trade;
          </Nav.Link>

          {/* <Nav.Link
            href='/contact'
            className='liberation-sans-bold'
            style={{ color: offBlack }}
          >
            CONTACT
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default nb

// Abstraction: Dropdown Menus
/* 
<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
  <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
  <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
</NavDropdown> 
 */
