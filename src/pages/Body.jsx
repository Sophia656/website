import React, { useEffect, useRef, useState } from 'react';
import img from '../img/body_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './Body.module.css';
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import B1Images from '../BodyImages/B1Images';
import G1Images from '../BodyImages/G1Images';

const Body = () => {
    //TITLE IMG
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
    //IMG B1

    
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
                <G1Images />
                <B1Images />
            </div>
        </div>
    );
};

export default Body;