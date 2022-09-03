import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import procent from '../../assets/img/icons/procent.png';
import Modal from '../Modal';

const Header = () => {
    return (
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
                            <Modal />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
