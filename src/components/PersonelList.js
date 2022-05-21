import React from 'react'
import { Button, Card, Col, Container, Form, FormControl, Image, Navbar, Row, Stack } from 'react-bootstrap';
import { BsThreeDots } from "react-icons/bs";

const PersonelList = () => {
  return (
      <Col xs lg="9">
          <Container fluid>
          <Row>
              <Container fluid>
            <Navbar bg="white" expand="lg" className='Header'>
            <Container fluid>
                <Navbar.Brand className='HeaderBrand'>
                <p className='HeaderTitle'>PERSONNEL LIST</p>
                <p className='HeaderText'>List of all Personnels</p>
                </Navbar.Brand>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Find Personnel"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="primary">Primary</Button>{' '}
                </Form>
            </Container>
            </Navbar>
                    </Container>
          </Row>
          
          <Row>
              <Container fluid>

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
        <Container className='PersonelDetail' fluid>
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
          </Row>
          
          </Container>
      </Col>
  )
}

export default PersonelList;