import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faUser, faCalendarDays, faFileLines, faNewspaper, faHashtag, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import './SidebarLeft.css';

export default function SidebarLeft() {
  return (
    <Col sm={4} className="sidebar-col d-none d-sm-block px-2">
      <Row>
        <Col lg={10} className='offset-lg-1 mt-5'>
          <Card>
            <Card.Text className='ms-1 fw-bold'>Gestisci la tua rete</Card.Text>
            <Card.Body>
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
              <Container className=" d-flex">
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/D4E10AQFA9AFTayqJLw/image-pad_100_100/0/1706826294788?e=1712613600&v=beta&t=Ah41Hk5810GlWdLZAWHX7p1664arE8DmgpQPyTvsJKM" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>Al Writing Assistant</Card.Text>
                  <Card.Text>Eliminate errors and work seamlessly across multiple platforms and devices.</Card.Text>
                </Container>
              </Container>

              <Container className='insertion-title d-flex justify-content-end mb-3' >
                <Card.Text>Promosso <FontAwesomeIcon icon={faEllipsis} /></Card.Text>
              </Container>
              <Container className=" d-flex">
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/D4E10AQFA9AFTayqJLw/image-pad_100_100/0/1706826294788?e=1712613600&v=beta&t=Ah41Hk5810GlWdLZAWHX7p1664arE8DmgpQPyTvsJKM" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>Al Writing Assistant</Card.Text>
                  <Card.Text>Eliminate errors and work seamlessly across multiple platforms and devices.</Card.Text>
                </Container>
              </Container>

              <Container className='insertion-title d-flex justify-content-end mb-3' >
                <Card.Text>Promosso <FontAwesomeIcon icon={faEllipsis} /></Card.Text>
              </Container>
              <Container className=" d-flex">
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/D4E10AQFA9AFTayqJLw/image-pad_100_100/0/1706826294788?e=1712613600&v=beta&t=Ah41Hk5810GlWdLZAWHX7p1664arE8DmgpQPyTvsJKM" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>Al Writing Assistant</Card.Text>
                  <Card.Text>Eliminate errors and work seamlessly across multiple platforms and devices.</Card.Text>
                </Container>
              </Container>

              <Container className='insertion-title d-flex justify-content-end mb-3' >
                <Card.Text>Promosso <FontAwesomeIcon icon={faEllipsis} /></Card.Text>
              </Container>
              <Container className=" d-flex">
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/D4E10AQFA9AFTayqJLw/image-pad_100_100/0/1706826294788?e=1712613600&v=beta&t=Ah41Hk5810GlWdLZAWHX7p1664arE8DmgpQPyTvsJKM" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>Al Writing Assistant</Card.Text>
                  <Card.Text>Eliminate errors and work seamlessly across multiple platforms and devices.</Card.Text>
                </Container>
              </Container>

              <Container className='insertion-title d-flex justify-content-end mb-3' >
                <Card.Text>Promosso <FontAwesomeIcon icon={faEllipsis} /></Card.Text>
              </Container>
              <Container className=" d-flex">
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/D4E10AQFA9AFTayqJLw/image-pad_100_100/0/1706826294788?e=1712613600&v=beta&t=Ah41Hk5810GlWdLZAWHX7p1664arE8DmgpQPyTvsJKM" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>Al Writing Assistant</Card.Text>
                  <Card.Text>Eliminate errors and work seamlessly across multiple platforms and devices.</Card.Text>
                </Container>
              </Container>

              <Container className='insertion-title d-flex justify-content-end mb-3' >
                <Card.Text>Promosso <FontAwesomeIcon icon={faEllipsis} /></Card.Text>
              </Container>
              <Container className=" d-flex">
                <Image className='mt-2' height={"40px"} src="https://media.licdn.com/dms/image/D4E10AQFA9AFTayqJLw/image-pad_100_100/0/1706826294788?e=1712613600&v=beta&t=Ah41Hk5810GlWdLZAWHX7p1664arE8DmgpQPyTvsJKM" />
                <Container className='insertion'>
                  <Card.Text className='insertion-title fw-bold mb-1'>Al Writing Assistant</Card.Text>
                  <Card.Text>Eliminate errors and work seamlessly across multiple platforms and devices.</Card.Text>
                </Container>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}
