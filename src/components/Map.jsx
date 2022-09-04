import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import avatar from '../assets/img/profile_photo.png';

const Map = () => {
    return (
        <section className="map">
            <div className="map__iframe-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.390424530402!2d37.615254705461446!3d55.751719698049314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2skz!4v1662189928448!5m2!1sru!2skz"
                    width="800"
                    height="509"
                    title="Карта"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="map__content">
                            <div className="map__item">
                                <span className="map__item-number">1</span>
                                <div className="map__item-right">
                                    <h2 className="map__item-title">Где встречаемся?</h2>
                                    <p className="map__item-text">Москва</p>
                                </div>
                            </div>
                            <div className="map__item">
                                <span className="map__item-number">2</span>
                                <div className="map__item-right">
                                    <h2 className="map__item-title">Время съемки</h2>
                                    <p className="map__item-text">3 часа</p>
                                </div>
                            </div>
                            <div className="map__item">
                                <span className="map__item-number">3</span>
                                <div className="map__item-right">
                                    <h2 className="map__item-title">Мест осталось:</h2>
                                    <p className="map__item-text">2 места</p>
                                </div>
                            </div>
                            <div className="map__item">
                                <img src={avatar} alt="" className="map__item-avatar" />
                                <div className="map__item-right">
                                    <h2 className="map__item-title">Мария Иванова</h2>
                                    <p className="map__item-text">Фотограф</p>
                                    <p className="map__item-more">Показать больше информации</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Map;
