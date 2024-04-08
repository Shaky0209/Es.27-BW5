import React, { useState }  from 'react';
import {useNavigate} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faUserGroup, faBriefcase, faCommentDots, faBell, faTableCells, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './NewNav.css';

export default function NewNav() {
  
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

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
            <Nav.Link className="link-nav d-lg-flex flex-lg-column align-items-center" onClick={()=> navigate("/")}>
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
            <Nav.Link className="link-nav link-tu d-lg-flex flex-lg-column align-items-center" onClick={()=> setDropdown(!dropdown)}>
              <Image  src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png" height={"40px"}/>
              <p className='link-lab'>Tu<FontAwesomeIcon icon={faCaretDown} /></p>

              <div className={`card-tu ${dropdown ? "" : "d-none"}`}>
                <Card className='px-0'>
                  <Card.Body className='d-flex flex-column align-items-center border-bottom'>
                    <Container className='d-flex align-items-center mb-4'>
                      <Card.Img
                      className='rounded-circle pe-2'
                      height={"50px"}
                      style={{width:"auto"}}
                      src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/369708733_122094180284025873_5862384298392943487_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Vy2K7VrqePsAb4pe_B7&_nc_oc=AdiUvDNXaKbJ7O7WEow-1TFwUqNXrnV0RBLnwSKjUifgXhbZfiLdhOJ45x8gIx24mp02siPQASBxH7Rdcg5JoaNu&_nc_ht=scontent-mxp2-1.xx&oh=00_AfBNrNV99QJpuoqjvBQh-09rKncK5ubGFIygQ-iDNJlsBA&oe=66185866"
                      />
                      <Card.Title className='card-tu-title'>Andrea Webix</Card.Title>
                    </Container>
                    <Button variant='outline-primary'
                    className='card-tu-btn py-0'
                    onClick={()=>navigate("/profile")}
                    type='button'
                    >
                      Visualizza Profilo
                    </Button>
                  </Card.Body>
                  <Card.Body className='border-bottom'>
                    <Card.Title className='card-tu-title'>Account</Card.Title>
                    <Card.Text className='mb-1'>Prova Premium per 0 EUR</Card.Text>
                    <Card.Text className='mb-1'>Impostazioni Privacy</Card.Text>
                    <Card.Text className='mb-1'>Guida</Card.Text>
                    <Card.Text className='mb-1'>Lingua</Card.Text>
                  </Card.Body>
                  <Card.Body className='border-bottom'>
                    <Card.Title className='card-tu-title'>Gestisci</Card.Title>
                    <Card.Text className='mb-1'>Post e Attività</Card.Text>
                    <Card.Text className='mb-1'>Account per la pubblicazione di off...</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text className='mb-1'>Esci</Card.Text>
                  </Card.Body>
                </Card>
              </div>

            </Nav.Link>
            <div className='d-lg-flex justify-content-end'>
              <Nav.Link className="link-nav border-start d-lg-flex flex-lg-column align-items-center">
                  <FontAwesomeIcon icon={faTableCells} className='icon' />
                  <p className='link-lab text-center d-flex flex-nowrap flex-end'>Per le Aziende<FontAwesomeIcon icon={faCaretDown} className='align-self-end' /></p>
              </Nav.Link>
              <Nav.Link className="link-nav cont-router-link d-lg-flex flex-lg-column align-items-center mt-2">
                  <Link to='/' className='router-link' >Prova Premium per 0 EUR</Link>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
