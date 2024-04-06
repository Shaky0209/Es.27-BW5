import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Form, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Image, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faUserGroup, faBriefcase, faCommentDots, faBell, faCaretDown, faTableCells } from '@fortawesome/free-solid-svg-icons';
import './MyNavCustom.css';

export default function MyNavCustom() {

  return (
    <Container fluid className='custom-nav d-flex align-items-center w-100 px-0'>
        <Row className='w-100'>
            <Col xs={1} className='d-flex align-items-center'>
                <Image className='ps-3' height={"40px"} src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png' />
            </Col>
            <Col xs={10} lg={3} className='d-flex align-items-center'>
                <InputGroup className='input-group ms-2' >
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                    <Form.Control
                    placeholder="Search"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Col>
            <Col lg={6} className="link-container d-none d-lg-flex justify-content-start justify-content-center pe-lg-4">
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
            </Col>
            <Col lg={2} className="d-none border-start d-lg-block  px-0">
                <Row className='w-100'>
                    <Col lg={6}  className="nav-link d-flex justify-content-between">
                        <Nav.Link href="#"><FontAwesomeIcon icon={faTableCells} className="nav-icon" /></Nav.Link>
                        <p className='d-flex flex-nowrap'>Per le Aziende <FontAwesomeIcon icon={faCaretDown} /></p>
                    </Col>
                    <Col lg={6} className="nav-link">
                    <Link to="/">Trova lavoro più velocemente con Premium</Link>
                    </Col>
                </Row>
            </Col>
            <Col xs={1} className='d-lg-none'>
                <button className="burger-btn" type="button">
                    <div className="btn-row top"></div>
                    <div className="btn-row center"></div>
                    <div className="btn-row down"></div>
                </button>
            </Col>
        </Row>
    </Container>
  )
}
