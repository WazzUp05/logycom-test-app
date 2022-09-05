import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mastercard from '../assets/img/icons/mastercard.svg';
import visa from '../assets/img/icons/visa.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col lg={4}>
                        <a href="#" className="footer__icon">
                            <img src={mastercard} alt="" />
                        </a>
                        <a href="#" className="footer__icon">
                            <img src={visa} alt="" />
                        </a>
                    </Col>
                    <Col lg={4} className="text-center">
                        <p className="footer__copy">
                            Тех. поддержка: <a href="tel:+88007000000">8(800)700-00-00</a>
                        </p>
                        <p className="footer__copy">© 2018 HELYFLY. All Rights Reserved.</p>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
