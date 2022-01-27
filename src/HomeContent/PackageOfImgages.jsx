import React from 'react';
import s from './HomePages.module.css';
import { animated } from '@react-spring/web';

const PackageOfImgages = ({transition}) => {
    return (
        <div className={s.home_pages__images_container}>
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