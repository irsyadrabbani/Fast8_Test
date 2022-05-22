import React from 'react'
import { Col, Container, Navbar, Nav, } from "react-bootstrap";
import { FaHome, FaCalendarAlt, FaUsers } from "react-icons/fa";
import  './Mystyle.css';


const Sidebar = () => {
  return (
      <Col>
    <Nav defaultActiveKey="/home" className="sidebar">
        <Container className='sidebarWrapper'>
        <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        <Nav.Link className='sidebarList'><FaHome className='sidebarIcon'/>Beranda</Nav.Link>
        <Nav.Link className='sidebarList' active><FaUsers className='sidebarIcon'/> Personnel List</Nav.Link>
        <Nav.Link className='sidebarList'><FaCalendarAlt className='sidebarIcon'/>Daily Attendance</Nav.Link>
        </Container>
    </Nav>
      </Col>
  )
}

export default Sidebar;