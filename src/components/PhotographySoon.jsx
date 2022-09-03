import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhotographyItem from './PhotographyItem';
import cup from '../assets/img/icons/cup.svg';
import star from '../assets/img/icons/star.svg';

const MOCK = [
    {
        time: '15:00 - 18:00',
        price: '1500₽',
        desc: 'Осталось — 1 место',
        btnText: 'Выбрать',
    },
    {
        time: '12:00 - 13:00',
        price: '1300₽',
        desc: 'Осталось — 1 место',
        btnText: 'Выбрать',
    },
];

const PhotographySoon = () => {
    return (
        <section className="photography-soon">
            <Container>
                <Row>
                    <Col md={8}>
                        <h2 className="photography-soon__title">
                            Доступная съемка
                            <br /> в ближайшее время:
                        </h2>
                        <div className="photography-soon__block">
                            <div className="photography-soon__block-header">
                                <h2 className="photography-soon__block-title">Пятница, 14 сентября</h2>
                                <label>
                                    <input type="date" name="" id="" />
                                </label>
                            </div>

                            {MOCK.map((item, index) => (
                                <PhotographyItem key={index} time={item.time} price={item.price} desc={item.desc} btnText={item.btnText} />
                            ))}

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
                </Row>
            </Container>
        </section>
    );
};

export default PhotographySoon;
