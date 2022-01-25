import React, { useEffect, useState } from 'react';
import s from './Contacts.module.css';
import img from '../img/about.jpg';
import heart from '../img/heart.png';
import { animated, useSpring } from 'react-spring';

const Contacts = () => {
    const [onHover, setOnHover] = useState(false);
    const rotateHeart1 = useSpring({
        delay: 400,
        config: {
            duration: 3500,
          },
        from: { opacity: 1, y: 450, x: 0, rotateY: 0, rotateZ: 0, rotateX : 0 },
        to: { 
            opacity: onHover ? 1 : 0,
            y: onHover ? -500 : 0, 
            x: onHover ? 0 : 0,
            rotateY: onHover ? 360 : 0, 
            rotateZ: onHover ? 80 : 0,
            rotateX: onHover ? 180 : 0,
        },
    });
    const rotateHeart2 = useSpring({
        delay: 300,
        config: {
            duration: 3200,
          },
        from: { opacity: 1, y: 450, x: 0, rotateY: 0, rotateZ: 0, rotateX : 0 },
        to: { 
            opacity: onHover ? 1 : 0,
            y: onHover ? -500 : 0, 
            x: onHover ? 90 : 0,
            rotateY: onHover ? 360 : 0, 
            rotateZ: onHover ? 170 : 0,
            rotateX: onHover ? 180 : 0,
        },
    });
    const rotateHeart3 = useSpring({
        delay: 200,
        config: {
            duration: 3000,
          },
        from: { opacity: 1, y: 420, x: 0, rotateY: 0, rotateZ: 0, rotateX : 0 },
        to: { 
            opacity: onHover ? 1 : 0,
            y: onHover ? -500 : 0, 
            x: onHover ? 70 : 0,
            rotateY: onHover ? 360 : 0, 
            rotateZ: onHover ? 30 : 0,
            rotateX: onHover ? 180 : 0,
        },
    });
    const rotateHeart4 = useSpring({
        delay: 200,
        config: {
            duration: 3800,
          },
        from: { opacity: 1, y: 400, x: 0, rotateY: 0, rotateZ: 0, rotateX : 0 },
        to: { 
            opacity: onHover ? 1 : 0,
            y: onHover ? -500 : 0, 
            x: onHover ? 150 : 0,
            rotateY: onHover ? 720 : 0, 
            rotateZ: onHover ? 300 : 0,
            rotateX: onHover ? 180 : 0,
        },
    });
    const rotateHeart5 = useSpring({
        delay: 200,
        config: {
            duration: 3500,
          },
        from: { opacity: 1, y: 400, x: 0, rotateY: 0, rotateZ: 0, rotateX : 0 },
        to: { 
            opacity: onHover ? 1 : 0,
            y: onHover ? -500 : 0, 
            x: onHover ? -30 : 0,
            rotateY: onHover ? 350 : 0, 
            rotateZ: onHover ? 70 : 0,
            rotateX: onHover ? 180 : 0,
        },
    });

    return (
        <div className={s.contacts__wrapper}>
            <h2 className={s.contacts__title}>ANTROPOVA SOPHIA</h2>
            <img src={img} className={s.img} alt="#" />
            <div className={s.img}></div>
            <span className={s.contacts__text}>Based in Moscow.</span>
            <div className={s.contacts__links__wrapper}>
                <span className={s.contacts__span_links}>inst: </span>
                {onHover
                ? 
                <div>
                    <animated.img style={rotateHeart1} className={s.heart} src={heart} alt="#" />
                    <animated.img style={rotateHeart2} className={s.heart} src={heart} alt="#" />
                    <animated.img style={rotateHeart3} className={s.heart} src={heart} alt="#" />
                    <animated.img style={rotateHeart4} className={s.heart} src={heart} alt="#" />
                    <animated.img style={rotateHeart5} className={s.heart} src={heart} alt="#" />
                </div>
                : <></>
                }
                <a onMouseOut={() => setOnHover(false)} onMouseOver={() => setOnHover(true)} className={s.contacts__links} href="https://instagram.com/antropova_sophia">antropova_sophia </a>
                <span className={s.contacts__span_links}>mail: </span>
                <a className={s.contacts__links} href="mailto:antropovasophia@gmail.com">antropovasophia@gmail.com</a>
            </div>
        </div>
    );
};

export default Contacts;