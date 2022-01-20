import React from 'react';
import s from '../pages/HomePage.module.css';
import { animated } from '@react-spring/web';

const PackageOfImgages = ({transition}) => {
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

export default PackageOfImgages;