import React from 'react'
import {Container, Image, Navbar} from "react-bootstrap";
import  './Mystyle.css';
const Topbar = () => {
  return (
      <div>
    <Navbar>
    <Container fluid>
      <Navbar.Brand>
        <Image
          src="/gadjian.png"
          className='Logo'
          />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end" >
        <Navbar.Text>
        <a>Hallo, <span className='NavUser'>Gadjian User</span></a>
        </Navbar.Text>
        <Image
          src="/profile.png"
          className='ProfileTop'
          roundedCircle
          />
      </Navbar.Collapse>
    </Container>
  </Navbar>
          </div>


  )
}

export default Topbar;