import React from 'react';
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import s from '../pages/HomePage.module.css';

const AnimatedWorksHP = () => {
    const {rotateX, rotateZ, opacity} = useSpring({
      from: {
        rotateX: 180,
        rotateZ: 180,
        opacity: 0,
      },
      to: {
        rotateX: 0,
        rotateZ: 0,
        opacity: 1,
      },
      config: {
        duration: 4000,
        easing: easings.easeInOutQuart,
      },
      delay: 700,
    })
    return (
        <div>
            <animated.div style={{ rotateX, rotateZ, opacity }} className={s.home_title__btn}>works</animated.div>
        </div>
    );
};

export default AnimatedWorksHP;