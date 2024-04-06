import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faUserGroup, faBriefcase, faCommentDots, faBell, faTableCells, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './NewNav.css';

export default function NewNav() {
  return (
    <Navbar expand="lg" className="nav-exp bg-body-tertiary border-bottom py-0">
      <Container fluid className='px-0'>
        <Navbar.Brand>
            <Image className='ps-3' height={"40px"} src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png' />
        </Navbar.Brand>
        <Form>
            <InputGroup>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='d-lg-flex justify-content-lg-around'>
          <Nav className="opening">
            <Nav.Link className="link-nav d-lg-flex flex-lg-column align-items-center">
              <FontAwesomeIcon icon={faHouse} className='icon' />
              <p className='link-lab' >Home</p>
            </Nav.Link>
            <Nav.Link className="link-nav d-lg-flex flex-lg-column align-items-center">
              <FontAwesomeIcon icon={faUserGroup} className='icon' />
              <p className='link-lab' >Rete</p>
            </Nav.Link>
            <Nav.Link className="link-nav d-lg-flex flex-lg-column align-items-center">
              <FontAwesomeIcon icon={faBriefcase} className='icon' />
              <p className='link-lab' >Lavoro</p>
            </Nav.Link>
            <Nav.Link className="link-nav d-lg-flex flex-lg-column align-items-center">
              <FontAwesomeIcon icon={faCommentDots} className='icon' />
              <p className='link-lab' >Messaggistica</p>
            </Nav.Link>
            <Nav.Link className="link-nav d-lg-flex flex-lg-column align-items-center">
              <FontAwesomeIcon icon={faBell} className='icon' />
              <p className='link-lab' >Notifiche</p>
            </Nav.Link>
            <Nav.Link className="link-nav d-lg-flex flex-lg-column align-items-center">
              <Image  src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png" height={"40px"}/>
              <p className='link-lab'>Tu<FontAwesomeIcon icon={faCaretDown} /></p>
            </Nav.Link>
            <div className='d-lg-flex justify-content-end'>
              <Nav.Link className="link-nav border-start d-lg-flex flex-lg-column align-items-center">
                  <FontAwesomeIcon icon={faTableCells} className='icon' />
                  <p className='link-lab text-center d-flex flex-nowrap flex-end'>Per le Aziende<FontAwesomeIcon icon={faCaretDown} className='align-self-end' /></p>
              </Nav.Link>
              <Nav.Link className="link-nav cont-router-link d-lg-flex flex-lg-column align-items-center mt-2">
                  <Link to="/" className='router-link' >Prova Premium per 0 EUR</Link>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
