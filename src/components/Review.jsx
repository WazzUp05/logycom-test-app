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
    const [isVissible, setIsVissible] = React.useState(false);

    const onVissible = () => {
        setIsVissible(!isVissible);
    };

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
                        <p className="all" onClick={onVissible}>
                            Показать все
                        </p>
                        <div className={`more  ${isVissible ? 'vissible' : ''}`}>
                            <p className="package-photos__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis doloribus autem porro deleniti aperiam
                                quas eum tempora ullam similique facere quasi dignissimos nihil recusandae, error adipisci? Voluptatem ut commodi et
                                cum in nemo, nulla exercitationem esse est praesentium enim aut deleniti iste. Enim, dolorum quisquam soluta
                                laudantium ullam nobis.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Review;
