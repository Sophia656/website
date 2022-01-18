import React from 'react';
import s from '../pages/HomePage.module.css';
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web';

const FirstLeftPackage = ({transition}) => {
    return (
        <div className={s.container}>
            {transition((style, item) => (
            <animated.div
            className={s.item}
            style={{ ...style }}
            >{item}</animated.div>
            ))}
        </div>
    );
};

export default FirstLeftPackage;