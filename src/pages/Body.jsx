import React, { useState } from 'react';
import img from '../img/body_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './Body.module.css';
import { Transition, animated, config, useSpring, easings } from 'react-spring';

const Body = () => {
    const [showTitle, setShowTitle] = useState(false);
    const {rotateZ} = useSpring({
        from: {
            rotateZ: 0,
          },
          to: {
            rotateZ: 360,
          },
          config: {
            duration: 4000,
            easing: easings.easeInOutQuart,
          },
          loop: { reverse: true },
        }
    )
    
    
    return (
        <div className={s.body__wrapper}>
            <div>
            <Transition
                items={showTitle}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={showTitle}
                delay={150}
                config={config}
                onRest={() => setShowTitle(true)}>
                {(styles, item) =>
                item && <animated.div style={styles} className={s.body__title}>
                    <img className={s.body__title_img} src={img} alt="" />
                    <animated.img style={{ rotateZ }} className={s.body__title_arr} src={downArr} alt="" />
                </animated.div>
                }
            </Transition>
            </div>
            <div className={s.body__img__wrapper}>
                <img src={require('../img/b1/b1_1.jpg')} className={s.body__img} />
                <img src={require('../img/b1/b1_2.jpg')} className={s.body__img} />
                <img src={require('../img/b1/b1_3.jpg')} className={s.body__img} />
                <img src={require('../img/b1/b1_4.jpg')} className={s.body__img} />
                <img src={require('../img/b1/b1_5.jpg')} className={s.body__img} />
                <img src={require('../img/b1/b1_6.jpg')} className={s.body__img} />
                <img src={require('../img/b1/b1_7.jpg')} className={s.body__img} />
                <img src={require('../img/b1/b1_8.jpg')} className={s.body__img} />
                <img src={require('../img/b1/b1_9.jpg')} className={s.body__img} />
            </div>
        </div>
    );
};

export default Body;