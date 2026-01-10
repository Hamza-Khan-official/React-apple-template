import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.module.css'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar_ = () => {
    return (
        <>
            <div className={style.main}>
                <Navbar bg="light" expand="lg" className="apple-navbar">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img
                                height={30}
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                alt="Apple"
                                className="apple-logo"
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#store">Store</Nav.Link>
                                <Nav.Link href="#mac">Mac</Nav.Link>
                                <Nav.Link href="#ipad">iPad</Nav.Link>
                                <Nav.Link href="#iphone">iPhone</Nav.Link>
                                <Nav.Link href="#watch">Watch</Nav.Link>
                                <Nav.Link href="#vision">Vision</Nav.Link>
                                <Nav.Link href="#airpods">AirPods</Nav.Link>
                                <Nav.Link href="#tv">TV & Home</Nav.Link>
                                <Nav.Link href="#entertainment">Entertainment</Nav.Link>
                                <Nav.Link href="#accessories">Accessories</Nav.Link>
                                <Nav.Link href="#support">Support</Nav.Link>
                                <Nav.Link className="auth-link">
                                    <Link to={'/React-apple-template/login'}>
                                        <span className={style.login}>Login</span>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#signup" className="auth-link">
                                    <Link to={'/React-apple-template/signup'}>
                                        <span className={style.login}>SignUP</span>
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Navbar_
