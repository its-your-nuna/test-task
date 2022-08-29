import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function NavScrollExample({isAutharized,setEmail}) {
  const[show,setShow]=useState(true)

  setTimeout(()=>{
    setShow(false)
  },[3000])
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link}  disabled={!isAutharized}   to="/home" href="#action1">Home page</Nav.Link>
            <Nav.Link as={Link}  disabled={!isAutharized}   to="/user" href="#action2">User page</Nav.Link>
            <Nav.Link as={Link}  disabled={!isAutharized}  to="/" href="#action2">Authorization page</Nav.Link>
          </Nav>
          <Form className="d-flex">
           
            <Button  variant="outline-success"
            >Exit</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {show &&
      <Alert variant={'danger'}  dismissible>  
          <Alert.Heading>Oh snap! Pls register at first</Alert.Heading>
      </Alert>
    }
    </>
  );
}

export default NavScrollExample;