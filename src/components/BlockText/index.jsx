import React from 'react';
import styles from './BlockText.module.scss';
import PropTypes from 'prop-types';

const BlockText = ({ title, text }) => {
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

BlockText.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

export default BlockText;
