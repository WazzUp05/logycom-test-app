import React from 'react';
import styles from './BlockText.module.scss';
import PropTypes from 'prop-types';

const BlockText = ({ title, text }) => {
    const [isVissible, setIsVissible] = React.useState(false);

    const onVissible = () => {
        setIsVissible(!isVissible);
    };

    return (
        <div className={styles.root}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <p className={styles.all} onClick={onVissible}>
                Читать еще
            </p>
            <div className={`${styles.more}  ${isVissible ? styles.vissible : ''}`}>
                <p className={`${styles.text}`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia perspiciatis cupiditate debitis, reprehenderit officia
                    laborum laboriosam culpa cumque blanditiis.
                </p>
            </div>
        </div>
    );
};

BlockText.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

export default BlockText;
