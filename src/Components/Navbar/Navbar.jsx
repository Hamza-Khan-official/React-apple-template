import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar_ = () => {
    return (
        <div style={{backgroundColor:'#ffffff'}}>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home"><img height={30} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Store</Nav.Link>
                        <Nav.Link href="#features">Mac</Nav.Link>
                        <Nav.Link href="#pricing">iPad</Nav.Link>
                        <Nav.Link href="#pricing">iPhone</Nav.Link>
                        <Nav.Link href="#pricing">Watch</Nav.Link>
                        <Nav.Link href="#pricing">Vision</Nav.Link>
                        <Nav.Link href="#pricing">AirPods</Nav.Link>
                        <Nav.Link href="#pricing">TV & Home</Nav.Link>
                        <Nav.Link href="#pricing">Entertainment</Nav.Link>
                        <Nav.Link href="#pricing">Accessories</Nav.Link>
                        <Nav.Link href="#pricing">Support</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <Nav.Link href="#pricing">SignUP</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar_
