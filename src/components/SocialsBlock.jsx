import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import vk from '../assets/img/icons/vk.svg';
import fb from '../assets/img/icons/fb.svg';
import inst from '../assets/img/icons/instagram.svg';

const SocialsBlock = () => {
    return (
        <section className="socials">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="socials__block">
                            <a href="#">
                                <img src={logo} alt="" className="socials__logo" />
                            </a>
                            <div className="socials__wrapper">
                                <a href="#" className="socials__item">
                                    <img src={vk} alt="" />
                                </a>
                                <a href="#" className="socials__item">
                                    <img src={fb} alt="" />
                                </a>
                                <a href="#" className="socials__item">
                                    <img src={inst} alt="" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SocialsBlock;
