import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import photo_1 from '../assets/img/photos/1.png';
import photo_2 from '../assets/img/photos/2.png';
import photo_3 from '../assets/img/photos/3.png';
import photo_4 from '../assets/img/photos/4.png';

const PackagePhotos = () => {
    return (
        <section className="package-photos">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="package-photos__title">Фотографии пакета:</h2>
                    </Col>
                </Row>
                <div className="package-photos__grid">
                    <Row>
                        <Col md={3}>
                            <img src={photo_1} className="img-fluid" alt="" />
                        </Col>
                        <Col md={3}>
                            <img src={photo_2} className="img-fluid" alt="" />
                        </Col>
                        <Col md={3}>
                            <img src={photo_3} className="img-fluid" alt="" />
                        </Col>
                        <Col md={3}>
                            <img src={photo_4} className="img-fluid" alt="" />
                        </Col>
                        <Col md={3}>
                            <img src={photo_2} className="img-fluid" alt="" />
                        </Col>
                        <Col md={3}>
                            <img src={photo_1} className="img-fluid" alt="" />
                        </Col>
                        <Col md={3}>
                            <img src={photo_4} className="img-fluid" alt="" />
                        </Col>
                        <Col md={3}>
                            <img src={photo_3} className="img-fluid" alt="" />
                        </Col>
                        <Col md={12}>
                            <p className="all">Показать все фото</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default PackagePhotos;
