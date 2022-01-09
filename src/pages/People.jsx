import React, { useState } from 'react';
import img from '../img/people_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './People.module.css';
import { Transition, animated, config, useSpring, easings } from 'react-spring';

const People = () => {
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
        <div className={s.people__wrapper}>
            <div>
            <Transition
                items={showTitle}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={showTitle}
                delay={0}
                config={config.stiff}
                onRest={() => setShowTitle(true)}>
                {(styles, item) =>
                item && <animated.div style={styles}>
                    <img className={s.people__title_img} src={img} alt="" />
                    <animated.img style={{ rotateZ }} className={s.people__title_arr} src={downArr} alt="" />
                </animated.div>
                }
            </Transition>
            </div>
        </div>
    );
};

export default People;