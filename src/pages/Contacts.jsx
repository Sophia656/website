import React from 'react';
import img from '../img/about.jpg';
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.contacts__wrapper}>
            <h2 className={s.contacts__title}>ANTROPOVA SOPHIA</h2>
            <img className={s.img} src={img}/>
            <span className={s.contacts__text}>hehehehehehhehehehehehhe</span>
            <div className={s.contacts__links__wrapper}>
                <span>inst: </span>
                <a className={s.contacts__links} href="https://instagram.com/antropova_sophia">antropova_sophia </a>
                <span>mail: </span>
                <a className={s.contacts__links} href="antropovasophia@gmail.com">antropovasophia@gmail.com</a>
            </div>
        </div>
    );
};

export default Contacts;