import React from 'react';
import styles from './ReviewItem.module.scss';

import PropTypes from 'prop-types';

import star from '../../assets/img/icons/star.svg';

const ReviewItem = ({ avatar, name, role, ratingImg, ratingText, text, date }) => {
    return (
        <div className={styles.root}>
            <div className={styles['img-wrapper']}>
                <img src={avatar} alt="" />
            </div>
            <div className={styles.content}>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
                <div className={styles.stars}>
                    <div className={styles['stars-wrapper']}>
                        <img src={star} className={styles.star} alt="" />
                        <img src={star} className={styles.star} alt="" />
                        <img src={star} className={styles.star} alt="" />
                        <img src={star} className={styles.star} alt="" />
                        <img src={star} className={styles.star} alt="" />
                    </div>
                    <div className={styles.rating}>
                        <img src={ratingImg} alt="" />
                        <span>{ratingText}</span>
                    </div>
                </div>
                <div className={styles.text}>{text}</div>
                <span className={styles.date}>{date}</span>
            </div>
        </div>
    );
};

ReviewItem.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    ratingImg: PropTypes.string,
    ratingText: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
};

export default ReviewItem;
