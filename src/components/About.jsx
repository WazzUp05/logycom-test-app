import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import photo from '../assets/img/profile_photo.png';

import BlockText from './BlockText';

const About = () => {
    return (
        <section className="about">
            <Container>
                <Row>
                    <Col md={{ span: 6, order: 1 }} xs={{ order: 2 }}>
                        <BlockText
                            title="Об организаторе:"
                            text="Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах. <br/> Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента. Мы никогда не зависим от субпоставщиков и не свяжемся…"
                        />
                        <BlockText
                            title="Что я предоставлю:"
                            text="Встречу вас на машине после длительного перелёта. Качественный подбор места и локации для вашей съемки. При необходимости всегда возможно прерваться на обед/ужин.Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае !"
                        />
                    </Col>
                    <Col md={{ span: 6, order: 2 }} xs={{ order: 1 }}>
                        <div className="about__profile">
                            <div className="about__img-wrapper">
                                <img src={photo} alt="" className="about__img" />
                            </div>
                            <h2 className="about__title">Марина Иванова</h2>
                            <p className="about__desc">Фотограф</p>
                            <p className="about__more">
                                Показать больше
                                <br />
                                информации о фотографе
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
