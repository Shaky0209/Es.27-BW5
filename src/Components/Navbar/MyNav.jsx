import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faUserGroup, faBriefcase, faCommentDots, faBell, faCaretDown, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MyNav.css';

export default function MyNav() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom py-0">
      <Container fluid className='collapse-menu px-0'>
        <Navbar.Brand href="#">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='collapse-nav d-flex justify-content-lg-center ms-0'>
          <Nav>
            <Container className="link-container d-lg-flex justify-content-start justify-content-center pe-lg-4">
                <Container className="nav-link">
                    <Nav.Link href="#"><FontAwesomeIcon icon={faHouse} className="nav-icon" /></Nav.Link>
                    <p>Home</p>
                </Container>
                <Container className="nav-link">
                    <Nav.Link href="#"><FontAwesomeIcon icon={faUserGroup} className="nav-icon" /></Nav.Link>
                    <p>Rete</p>
                </Container>
                <Container className="nav-link">
                    <Nav.Link href="#"><FontAwesomeIcon icon={faBriefcase} className="nav-icon" /></Nav.Link>
                    <p>Lavoro</p>
                </Container>
                <Container className="nav-link">
                    <Nav.Link href="#"><FontAwesomeIcon icon={faCommentDots} className="nav-icon" /></Nav.Link>
                    <p>Messaggistica</p>
                </Container>
                <Container className="nav-link">
                    <Nav.Link href="#"><FontAwesomeIcon icon={faBell} className="nav-icon" /></Nav.Link>
                    <p>Notifiche</p>
                </Container>
                <Container className="nav-link p-0">
                    <Nav.Link href="#"><Image height={"35px"} src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png" /></Nav.Link>
                    <p>Tu <FontAwesomeIcon icon={faCaretDown} /></p>
                </Container>
            </Container>
            <Container className="resp-border d-lg-flex justify-content-end">
                <Container className="nav-link right">
                    <Nav.Link href="#"><FontAwesomeIcon icon={faTableCells} className="nav-icon" /></Nav.Link>
                    <p className='d-flex flex-nowrap'>Per le Aziende <FontAwesomeIcon className='' icon={faCaretDown} /></p>
                </Container>
                <Container className="nav-link right">
                    <Link to="/">Trova lavoro più velocemente con Premium</Link>
                </Container>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}