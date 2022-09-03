import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import time from '../assets/img/icons/time.svg';
import map_pin from '../assets/img/icons/map-pin.svg';
import chats from '../assets/img/icons/chats.svg';
import photo from '../assets/img/icons/photo.svg';
import cup from '../assets/img/icons/cup.svg';
import star from '../assets/img/icons/star.svg';
import photoshoot_img from '../assets/img/img-1.png';

const Photoshoot = () => {
    return (
        <section className="photoshoot">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="photoshoot__header">
                            <h2 className="photoshoot__title">
                                Фотосессия
                                <br />в вертолете
                            </h2>
                            <p className="photoshoot__desc">
                                Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие
                                моменты
                            </p>
                            <ul className="photoshoot__list">
                                <li>
                                    <img src={time} alt="" /> 3 часа съемки
                                </li>
                                <li>
                                    <img src={photo} alt="" /> Более 50 фотографий
                                </li>
                                <li>
                                    <img src={map_pin} alt="" /> Москва
                                </li>
                                <li>
                                    <img src={chats} alt="" /> Готовы ответить на любые вопросы
                                </li>
                            </ul>
                            <div className="stars">
                                <img src={cup} className="cup" alt="" />
                                <p>
                                    Более <b>50</b> отзывов с оценкой
                                </p>
                                <div className="stars-wrapper">
                                    <img src={star} className="star" alt="" />
                                    <img src={star} className="star" alt="" />
                                    <img src={star} className="star" alt="" />
                                    <img src={star} className="star" alt="" />
                                    <img src={star} className="star" alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={photoshoot_img} alt="" className="photoshoot__img img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Photoshoot;
