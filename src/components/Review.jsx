import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReviewItem from './ReviewItem';

import check from '../assets/img/icons/check.png';

import avatar_1 from '../assets/img/avatars/1.png';
import avatar_2 from '../assets/img/avatars/2.png';
import avatar_3 from '../assets/img/avatars/3.png';

const MOCK = [
    {
        avatar: avatar_1,
        name: 'Валерия Антонова',
        role: 'Арт-директор',
        ratingImg: check,
        ratingText: 'Супер! Я бы заказала съемку снова!',
        text: 'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!',
        date: '27 Апреля, 2019г.',
    },
    {
        avatar: avatar_2,
        name: 'Виталий Петров',
        role: 'Фотограф',
        ratingImg: check,
        ratingText: 'Супер! Я бы заказала съемку снова!',
        text: 'Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!',
        date: '19 Апреля, 2019г.',
    },
    {
        avatar: avatar_3,
        name: 'Виталий Петров',
        role: 'Фотограф',
        ratingImg: check,
        ratingText: 'Супер! Я бы заказала съемку снова!',
        text: 'Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!',
        date: '11 Апреля, 2019г.',
    },
];

const Review = () => {
    return (
        <section className="review">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h2 className="review__title">Отзывы:</h2>
                        {MOCK.map((item, index) => {
                            return (
                                <ReviewItem
                                    avatar={item.avatar}
                                    name={item.name}
                                    role={item.role}
                                    ratingImg={item.ratingImg}
                                    ratingText={item.ratingText}
                                    text={item.text}
                                    date={item.date}
                                    key={index}
                                />
                            );
                        })}
                        <p className="all">Показать все</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Review;
