import React from 'react';
import styles from './PhotographyItem.module.scss';

const PhotographyItem = ({ time, price, desc, btnText }) => {
    return (
        <div className={styles.root}>
            <div className="left">
                <p className="time">{time}</p>
                <p className={styles.price}>{price}</p>
                <p className="desc">{desc}</p>
            </div>
            <button className="btn-main btn-main--orange">{btnText}</button>
        </div>
    );
};

export default PhotographyItem;
