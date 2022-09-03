import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../../assets/img/logo.png';

const Navbar = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <nav className="navbar">
                        <a href="/" className="logo">
                            <img src={logo} alt="" />
                        </a>
                        <div className="navbar__phone">
                            Телефон: <a href="tel:+78001231212">8(800)-123-12-12</a>
                        </div>
                    </nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Navbar;
