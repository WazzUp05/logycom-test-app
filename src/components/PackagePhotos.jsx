import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import photo_1 from '../assets/img/photos/1.png';
import photo_2 from '../assets/img/photos/2.png';
import photo_3 from '../assets/img/photos/3.png';
import photo_4 from '../assets/img/photos/4.png';

const PackagePhotos = () => {
    const [isVissible, setIsVissible] = React.useState(false);

    const onVissible = () => {
        setIsVissible(!isVissible);
    };

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
                            <p className="all" onClick={onVissible}>
                                Показать все фото
                            </p>
                            <div className={`more  ${isVissible ? 'vissible' : ''}`}>
                                <p className="package-photos__text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis doloribus autem porro deleniti
                                    aperiam quas eum tempora ullam similique facere quasi dignissimos nihil recusandae, error adipisci? Voluptatem ut
                                    commodi et cum in nemo, nulla exercitationem esse est praesentium enim aut deleniti iste. Enim, dolorum quisquam
                                    soluta laudantium ullam nobis.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default PackagePhotos;
