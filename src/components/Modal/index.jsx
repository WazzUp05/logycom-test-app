import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen }) => {
    const [open, setOpen] = React.useState(true);

    // const isOpen = () => {
    //     setOpen(true);
    // };

    const isClosed = () => {
        setOpen(false);
    };

    return (
        <div className={`${styles.root} ${open ? styles.open : ''}`}>
            <div className={styles.content}>
                <span onClick={isClosed} className={styles.close} />
                <div className={styles.title}>Бронирование</div>
            </div>
        </div>
    );
};

export default Modal;
