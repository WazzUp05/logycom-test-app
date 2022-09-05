import React from 'react';
import InputMask from 'react-input-mask';

import styles from './Modal.module.scss';

const Modal = ({ btnText, className }) => {
    const [open, setOpen] = React.useState(false);

    const date = React.useRef(null);
    const email = React.useRef(null);
    const firstName = React.useRef(null);
    const lastName = React.useRef(null);
    const tel = React.useRef(null);
    const card = React.useRef(null);
    const validity = React.useRef(null);
    const cvv = React.useRef(null);
    const checkbox = React.useRef(null);
    const submit = React.useRef(null);

    const onOpen = () => {
        document.querySelector('body').style.overflow = 'hidden';
        setOpen(true);
    };

    const onClose = () => {
        document.querySelector('body').style.removeProperty('overflow');
        setOpen(false);
    };

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    function checkParams() {
        if (
            date.current.value.length !== 0 &&
            email.current.value.length !== 0 &&
            firstName.current.value.length !== 0 &&
            lastName.current.value.length !== 0 &&
            tel.current.value.length === 16 &&
            card.current.value.length === 19 &&
            validity.current.value.length === 5 &&
            cvv.current.value.length === 3 &&
            checkbox.current.checked
        ) {
            submit.current.removeAttribute('disabled');
        } else {
            submit.current.setAttribute('disabled', 'disabled');
        }
    }

    React.useEffect(() => {
        checkParams();
    }, []);

    return (
        <>
            <button className={`${styles.btn} ${className}`} onClick={onOpen}>
                {btnText}
            </button>
            <div className={`${styles.root} ${open ? styles.open : ''}`}>
                <div className={styles.content}>
                    <span onClick={onClose} className={styles.close} />
                    <div className={styles.title}>Бронирование</div>
                    <form action="" className={styles.form}>
                        <div className={styles['form-group']}>
                            <label htmlFor="date">
                                Дата<span>*</span>
                            </label>
                            <input required onChange={checkParams} type="date" ref={date} name="date" id="date" />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="email">
                                Email<span>*</span>
                            </label>
                            <input required onChange={checkParams} type="email" ref={email} name="email" id="email" placeholder="Электронная почта" />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="firstName">
                                Имя<span>*</span>
                            </label>
                            <input required onChange={checkParams} type="text" ref={firstName} name="firstName" id="firstName" placeholder="Имя" />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="lastName">
                                Фамилия<span>*</span>
                            </label>
                            <input required onChange={checkParams} type="text" ref={lastName} name="lastName" id="lastName" placeholder="Фамилия" />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="tel">
                                Телефон<span>*</span>
                            </label>
                            <InputMask
                                mask="+7 999 999 99 99"
                                required
                                onChange={checkParams}
                                ref={tel}
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="+7 (905) 184-81-40"
                                maskChar=""
                            />
                        </div>
                        <div className={`${styles['form-group']} ${styles['card-wrapper']}`}>
                            <label htmlFor="card">
                                Данные карты<span>*</span>
                            </label>
                            <InputMask
                                mask="9999 9999 9999 9999"
                                ref={card}
                                required
                                onChange={checkParams}
                                type="text"
                                name="card"
                                id="card"
                                placeholder="Номер карты"
                                maskChar=""
                            />
                            <div className={styles['input-wrapper']}>
                                <InputMask
                                    mask="99/99"
                                    required
                                    onChange={checkParams}
                                    ref={validity}
                                    type="text"
                                    name="validity"
                                    id="validity"
                                    placeholder="Срок действия"
                                    maskChar=""
                                />
                                <InputMask
                                    mask="999"
                                    required
                                    onChange={checkParams}
                                    ref={cvv}
                                    type="text"
                                    name="cvv"
                                    id="cvv"
                                    placeholder="CVV"
                                    maskChar=""
                                />
                            </div>
                        </div>
                        <div className={styles['checkbox-group']}>
                            <input
                                onChange={checkParams}
                                ref={checkbox}
                                type="checkbox"
                                name="agreement"
                                className={styles['custom-checkbox']}
                                id="agreement"
                            />
                            <label htmlFor="agreement">Я согласен с пользовательским соглашением и публичной офертой</label>
                        </div>
                        <button ref={submit} type="submit" id="submit" className={styles['btn-form']}>
                            Забронировать
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;
