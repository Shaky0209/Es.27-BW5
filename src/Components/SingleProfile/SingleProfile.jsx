import React, { useState } from 'react';
import { Image, Card, Button, Col } from 'react-bootstrap';
import './SingleProfile.css';


export default function SingleProfile({area, image, name, surname, title}) {

  const [disappear, setDisappear] = useState(false);

  return (
    <Col sm={4} md={3} className={`my-1 px-1 ${disappear ? "d-none" : ""}`}>
      <Card  style={{height:"100%"}} className='profile-card p-2'>
          <Image src={image} className='rounded-circle' />
          <Card.Body className='px-0'>
            <Card.Text className='fw-bold mb-1'>{name} {surname}</Card.Text>
            <Card.Text className='mb-1'>{title}</Card.Text>
            <Card.Text className='mb-1'>{area ? area : "Vuoto"}</Card.Text>
            <Button className='close-card-btn' onClick={()=> setDisappear(!disappear)} >X</Button>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-center border-0 px-0'>
            <Button className='connect-btn' variant="outline-primary">Collegati</Button>
          </Card.Footer>
      </Card>
    </Col>
  )
}
