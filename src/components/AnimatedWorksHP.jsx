import React from 'react';
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import s from '../pages/HomePage.module.css';

const AnimatedWorksHP = () => {
    const {rotateZ} = useSpring({
        from: {
            rotateZ: 180,
          },
          to: {
            rotateZ: 0,
          },
          config: {
            duration: 4000,
            easing: easings.easeInOutQuart,
          },
        }
        
    )
    return (
        <div>
            <animated.div style={{ rotateZ }} className={s.view__works2}>works</animated.div>
        </div>
    );
};

export default AnimatedWorksHP;