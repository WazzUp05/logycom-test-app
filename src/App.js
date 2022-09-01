import { Container, Row, Col } from 'react-bootstrap';
import logo from './assets/img/logo.png';
import procent from './assets/img/icons/procent.png';
import time from './assets/img/icons/time.svg';
import map_pin from './assets/img/icons/map-pin.svg';
import chats from './assets/img/icons/chats.svg';
import photo from './assets/img/icons/photo.svg';
import cup from './assets/img/icons/cup.svg';
import star from './assets/img/icons/star.svg';
import photoshoot_img from './assets/img/img-1.png';
import photo_1 from './assets/img/photos/1.png';
import photo_2 from './assets/img/photos/2.png';
import photo_3 from './assets/img/photos/3.png';
import photo_4 from './assets/img/photos/4.png';

import './scss/app.scss';

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col md={12}>
                        <nav className="navbar">
                            <a href="/" className="logo">
                                <img src={logo} alt="" />
                            </a>
                            <div className="navbar__phone">
                                Телефон: <a href="tel:+78001231212">8(800)-123-12-12</a>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
            <header className="header">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="header__content">
                                <h1 className="header__title">
                                    Эксклюзивная <span className="orange">фотосессия</span> при полете на вертолете
                                </h1>
                                <div className="header__price">
                                    <div className="header__price-left">
                                        <p className="header__price-left-title">Стоимость:</p>
                                        <p className="header__price-left-value">1500₽</p>
                                    </div>
                                    <img src={procent} alt="" />
                                </div>
                                <button className="btn-main">Забронировать место</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

            <main>
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
                                        Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит
                                        лучшие моменты
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
                                    <div className="photoshoot__stars">
                                        <img src={cup} className="cup" alt="" />
                                        <p>
                                            Более <b>50</b> отзывов с оценкой
                                        </p>
                                        <div className="photoshoot__stars-wrapper">
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
                                    <img src={photo_1} alt="" />
                                </Col>
                                <Col md={3}>
                                    <img src={photo_2} alt="" />
                                </Col>
                                <Col md={3}>
                                    <img src={photo_3} alt="" />
                                </Col>
                                <Col md={3}>
                                    <img src={photo_4} alt="" />
                                </Col>
                                <Col md={3}>
                                    <img src={photo_2} alt="" />
                                </Col>
                                <Col md={3}>
                                    <img src={photo_1} alt="" />
                                </Col>
                                <Col md={3}>
                                    <img src={photo_4} alt="" />
                                </Col>
                                <Col md={3}>
                                    <img src={photo_3} alt="" />
                                </Col>
                                <Col md={12}>
                                    <p className="package-photos__grid-all">Показать все фото</p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </main>
        </div>
    );
}

export default App;
