import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faUser, faCalendarDays, faFileLines, faNewspaper, faHashtag, faEllipsis, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import './SidebarLeft.css';

export default function SidebarLeft() {
  return (
    <Col sm={4} className="sidebar-col d-none d-sm-block px-2">
      <Row>
        <Col lg={10} className='offset-lg-1 my-5'>
          <Card>
            <Card.Text className='ms-1 fw-bold'>Gestisci la tua rete</Card.Text>
            <Card.Body className='border-bottom'>
              <Card.Text><FontAwesomeIcon icon={faUserGroup} className='pe-2' />Collegamenti</Card.Text>
              <Card.Text><FontAwesomeIcon icon={faUser} className='pe-2' />Persone che segui e follower</Card.Text>
              <Card.Text><FontAwesomeIcon icon={faCalendarDays} className='pe-2' />Eventi</Card.Text>
              <Card.Text><FontAwesomeIcon icon={faFileLines} className='pe-2' />Pagine</Card.Text>
              <Card.Text><FontAwesomeIcon icon={faNewspaper} className='pe-2' />Newsletter</Card.Text>
              <Card.Text><FontAwesomeIcon icon={faHashtag} className='pe-2' />Hashtag</Card.Text>
              <Card.Text className='border border-bottom' ></Card.Text>
              <Container className='insertion-title d-flex justify-content-end mb-3' >
                <Card.Text>Promosso <FontAwesomeIcon icon={faEllipsis} /></Card.Text>
              </Container>
              <Container className="d-flex border-bottom pb-3">
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/D4E10AQFA9AFTayqJLw/image-pad_100_100/0/1706826294788?e=1712613600&v=beta&t=Ah41Hk5810GlWdLZAWHX7p1664arE8DmgpQPyTvsJKM" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>Al Writing Assistant</Card.Text>
                  <Card.Text>Eliminate errors and work seamlessly across multiple platforms and devices.</Card.Text>
                </Container>
              </Container>
              <Container className='d-flex border-bottom mt-3 pb-3'>
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/C560EAQFfH3mkjjp0Ig/rightRail-logo-shrink_100_100/0/1651504666775?e=1713045600&v=beta&t=8qXTbzgCuuTF4QsskL9N5o9R77denmCLNZeM4pFB_CA" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>Wave goodbye to busywork</Card.Text>
                  <Card.Text>The report on lottery trends for tomorrow’s players. Out now.</Card.Text>
                </Container>
              </Container>
              <Container className='d-flex mt-3 pb-3'>
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/D4E10AQECeNojgZPtOg/image-shrink_1280/0/1712133703932?e=1712700000&v=beta&t=qPoeSliL8YdVMxmf_qqLT24CfG8ms2RJ0dxVF2h1W-I" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>The Future of Lottery</Card.Text>
                  <Card.Text>Every day Zapier saves people 600,000 hours of busywork. Try it free.</Card.Text>
                </Container>
              </Container>
              
              
            </Card.Body>
            <Card.Body>
              <Container className='insertion d-flex flex-column align-items-center'>
                <Card.Text>Informazioni Accessibilità</Card.Text>
                <Card.Text>Centro assistenza</Card.Text>
                <Card.Text>Privacy e condizioni <FontAwesomeIcon icon={faCaretDown} className='align-self-end' /></Card.Text>
                <Card.Text>Opzioni per gli annunci pubblicitari</Card.Text>
                <Card.Text>Pubblicità Servizi alle alziende <FontAwesomeIcon icon={faCaretDown} className='align-self-end' /></Card.Text>
                <Card.Text>Scarica l'app Linkedin   Altro</Card.Text>
                <Card.Text>
                  <Image className='' height={"30px"} src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png" /> 
                  <span> Linkedin Corporation ©</span>
                  <Card.Text className='text-center mb-4'>2024</Card.Text>
                </Card.Text>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}
