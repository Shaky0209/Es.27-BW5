import React from 'react'
import BodyHome from '../../Components/BodyHome/BodyHome';
import SidebarLeft from '../../Components/SidebarLeft/SidebarLeft';
import {Container, Row} from 'react-bootstrap';
import './Home.css';

export default function Home() {
  return (
    <Container fluid className='px-0'>
      <Row className='bg-gray mx-0'>
        <SidebarLeft />
        <BodyHome />
      </Row>
    </Container>
  )
}
