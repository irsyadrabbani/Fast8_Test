import React from 'react'
import { Container, ListGroup, Nav, } from "react-bootstrap";
import { FaHome, FaCalendarAlt, FaUsers } from "react-icons/fa";
import  './Mystyle.css';


const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/home" className="sidebar">
        <Container className='sidebarWrapper'>
        <Nav.Link className='sidebarList'><FaHome className='sidebarIcon'/>Beranda</Nav.Link>
        <Nav.Link className='sidebarList' active><FaUsers className='sidebarIcon'/> Personnel List</Nav.Link>
        <Nav.Link className='sidebarList'><FaCalendarAlt className='sidebarIcon'/>Daily Attendance</Nav.Link>
        </Container>
    </Nav>
  )
}

export default Sidebar;