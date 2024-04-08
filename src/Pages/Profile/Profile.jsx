import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faShieldHalved, faCircle } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

export default function Profile() {
  
  return (
    <Container fluid className='profile-body'>
      <Row>
        <Col lg={7} className='bg-white offset-lg-1 px-0 my-2 pb-2'>
          <Container fluid className='top-bg'>
            <Image 
            height={"150px"}
            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/369708733_122094180284025873_5862384298392943487_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Vy2K7VrqePsAb4pe_B7&_nc_oc=AdiUvDNXaKbJ7O7WEow-1TFwUqNXrnV0RBLnwSKjUifgXhbZfiLdhOJ45x8gIx24mp02siPQASBxH7Rdcg5JoaNu&_nc_ht=scontent-mxp2-1.xx&oh=00_AfBNrNV99QJpuoqjvBQh-09rKncK5ubGFIygQ-iDNJlsBA&oe=66185866"
            className='profile-img rounded-circle'
            />
          </Container>  
          <Container>
            <Row>    
              <Col lg={8} className='border border-1 mt-5'> 
                <Card.Title>
                  Andrea Webix
                  <Button variant='outline-primary' className='verify-btn ms-3 px-2 py-0'><FontAwesomeIcon icon={faShieldHalved}/> Verifica ora</Button>
                </Card.Title>
                <Card.Text className='style-fs pt-3'>
                  Fabriano, Marche, Italia
                  <Link to="/profile" className='style-fs'>
                    <FontAwesomeIcon className='link-icon ms-2' icon={faCircle} />
                    Informazioni di contatto
                  </Link>
                </Card.Text>
                <Container fluid className='px-0'>
                  <Button className='btn-style'>Disponibile per</Button>
                  <Button variant='outline-primary' className='btn-style ms-1'>Aggiungi sezione del profilo</Button>
                  <Button variant='outline-secondary' className='btn-style ms-1'>Altro</Button>
                </Container>
                <Container className='row d-flex justify-content-between pt-3 px-0'>
                <Container className='col-lg-6 p-1'>
                    <Card className='bg-color p-1'>
                      <Row>
                        <Col xs={10}>
                          <Card.Title className='body-style fw-bold'>Disponibile a Lavorare</Card.Title>
                          <Card.Text className='body-style'>Ruoli di Sviluppatore Web</Card.Text>
                          <Link className='body-style'>Mostra Dettagli</Link>
                        </Col>
                        <Col xs={2}>
                          <Button variant='outline-secondary' className='pencil-btn px-1 py-0'><FontAwesomeIcon icon={faPencil} /></Button>
                        </Col>
                      </Row>
                    </Card>
                  </Container>

                  <Container className='col-lg-6 p-1'>
                    <Card className='p-1'>
                      <Row>
                        <Col xs={10}>
                          <Card.Title className='body-style fw-bold'>
                            Fai sapere che stai facendo selezone e attrai candidati qualificati.
                          </Card.Title>
                          <Link className='body-style'>Inizia</Link>
                        </Col>
                        <Col xs={2}>
                          <Button variant='outline-secondary' className='pencil-btn px-1 py-0'><FontAwesomeIcon icon={faPencil} /></Button>
                        </Col>
                      </Row>
                    </Card>
                  </Container>

                </Container>
              </Col>
              <Col lg={4} className='border border-1'>
                <Container fluid className='d-flex justify-content-end pe-5 pt-3'>
                  <Button variant='outline-secondary' className='pencil-btn p-0'><FontAwesomeIcon icon={faPencil} /></Button>
                </Container>
                <Container fluid className='d-flex align-items-center'>
                  <Image height={"50px"} className='m-3' src='https://tse1.explicit.bing.net/th?id=OIP.d1G-tONSrfABCiFjHgO3CAAAAA&pid=Api'/>
                  <Card.Text>Epicoding S.P.A.</Card.Text>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={3} className='text-center p-2'>
          <p className="border border1">Colonna Destra</p>
        </Col>
      </Row>
    </Container>
  )
}
