import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { BsThreeDots } from "react-icons/bs";

const PersonelList = () => {
  return (
      <Col xs lg="9">
      <Container >
    <Card className='cardContainer'>
        <Card.Header className='cardHeader'>       
            <a>
            Personel ID :
            <span className='personelID'>
                12345
            </span>
            </a>
            <BsThreeDots className='PersonelIcon' />
        </Card.Header>
        <Card.Body>
        <Image className='PersonelProfile' src="/profile.png" roundedCircle/>
        <Container className='PersonelDetail'>
            <Card.Title className='PersonelDetailTitle'>
                Name
            </Card.Title>
            <Card.Text >
                Irsyad
            </Card.Text>
            <Card.Title className='PersonelDetailTitle'>
                Phone Number
            </Card.Title>
            <Card.Text >
                0123456789
            </Card.Text>
            <Card.Title className='PersonelDetailTitle'>
                Birthday
            </Card.Title>
            <Card.Text >
                19 May 1999
            </Card.Text>
            <Card.Title className='PersonelDetailTitle'>
                Email
            </Card.Title>
            <Card.Text >
                irsyad@gmail.co.id
            </Card.Text>
        </Container>
        </Card.Body>
    </Card>
      </Container>
      </Col>
  )
}

export default PersonelList;