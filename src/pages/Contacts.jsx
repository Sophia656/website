import React from 'react';
import s from './Contacts.module.css';
import img from '../img/about.jpg';

const Contacts = () => {
    return (
        <div className={s.contacts__wrapper}>
            <h2 className={s.contacts__title}>ANTROPOVA SOPHIA</h2>
            <img src={img} className={s.img} alt="3" />
            {/* <div className={s.img}></div> */}
            <span className={s.contacts__text}>Based in Moscow.</span>
            <div className={s.contacts__links__wrapper}>
                <span className={s.contacts__span_links}>inst: </span>
                <a className={s.contacts__links} href="https://instagram.com/antropova_sophia">antropova_sophia </a>
                <span className={s.contacts__span_links}>mail: </span>
                <a className={s.contacts__links} href="mailto:antropovasophia@gmail.com">antropovasophia@gmail.com</a>
            </div>
        </div>
    );
};

export default Contacts;
