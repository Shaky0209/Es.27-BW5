import React from 'react'
import NewNav from '../Components/NewNav/NewNav';
import BodyHome from '../Components/BodyHome/BodyHome';
import SidebarLeft from '../Components/SidebarLeft/SidebarLeft';
import {Container, Row} from 'react-bootstrap';
import './Home.css';

export default function Home() {
  return (
    <>
      
      <Container fluid className='px-0'>
        <NewNav/>
        <Row className='bg-gray'>
          <SidebarLeft />
          <BodyHome />
        </Row>
      </Container>
    </>
  )
}
