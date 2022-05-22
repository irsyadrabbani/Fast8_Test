import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, Image, InputGroup, Navbar, Row, Stack } from 'react-bootstrap';
import { BsThreeDots, BsPlusLg } from "react-icons/bs";

const PersonelList = () => {
    const [personnels, setPersonnels] = useState([])

    const getPersonnels = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=28')
            setPersonnels(response.data.results);
            console.log(response.data.results);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() =>{
        getPersonnels();
    }, [])

    const handlePageClick = (data) => {
        console.log(data.selected)
    }

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
                <Form className="SearchInput">
                    <FormControl
                    type="search"
                    placeholder="Find Personnel"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                    <Button variant="info" className='btnAdd'>Add Personel <BsPlusLg /></Button>
            </Container>
            </Navbar>
                    </Container>
          </Row>      
          <Row>
              <Container fluid className='d-flex'>
                  {
                      personnels.slice(0,4).map((personnel, index) => {
                          return (
                              <Card className='cardContainer' key={index}>
                        <Card.Header className='cardHeader'>       
                            <a>
                            Personel ID :
                            <span className='personelID'>
                                {personnel.id.value}
                            </span>
                            </a>
                            <BsThreeDots className='PersonelIcon' />
                        </Card.Header>
                        <Card.Body>
                            <Image className='PersonelProfile' src={personnel.picture.medium} roundedCircle/>
                            <Container className='PersonelDetail' fluid>
                                <Card.Title className='PersonelDetailTitle'>
                                    Name
                                </Card.Title>
                                <Card.Text >
                                {personnel.name.first}
                                {personnel.name.last}
                                </Card.Text>
                                <Card.Title className='PersonelDetailTitle'>
                                    Phone Number
                                </Card.Title>
                                <Card.Text >
                                {personnel.phone}
                                </Card.Text>
                                <Card.Title className='PersonelDetailTitle'>
                                    Birthday
                                </Card.Title>
                                <Card.Text >
                                {personnel.dob.date}
                                </Card.Text>
                                <Card.Title className='PersonelDetailTitle'>
                                    Email
                                </Card.Title>
                                <Card.Text >
                                {personnel.email}
                                </Card.Text>
                            </Container>
                        </Card.Body>
                    </Card>
                        )
                    })
                }
              </Container>
          </Row>
          </Container>
      </Col>
  )
}

export default PersonelList;