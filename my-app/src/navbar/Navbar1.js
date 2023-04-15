import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
export default class Navbar1 extends Component {
  state={
    language:localStorage.getItem("til")?localStorage.getItem("til"):"uz"
  }
  render() {
    return (
      <div>
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <DropdownButton onClick={()=>{localStorage.setItem("tol","uz");window.location.reload()}} as={ButtonGroup} title="uz" id="bg-nested-dropdown">
        <Dropdown.Item  onClick={()=>{localStorage.setItem("tol","ru");window.location.reload()}} eventKey="1">ru</Dropdown.Item>
        <Dropdown.Item  onClick={()=>{localStorage.setItem("tol","eng");window.location.reload()}} eventKey="2">eng</Dropdown.Item>
      </DropdownButton>
        </Container>

      </Navbar>
    

      </div>
    )
  }
}
