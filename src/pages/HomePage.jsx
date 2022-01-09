import React, { useState } from 'react';
import img from '../img/home_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './HomePage.module.css';
import { Transition, animated, config, useSpring, easings } from 'react-spring';

const HomePage = () => {
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
        <div className={s.home__wrapper}>
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
                    <img className={s.home__title_img} src={img} alt="" />
                    <animated.img style={{ rotateZ }} className={s.home__title_arr} src={downArr} alt="" />
                </animated.div>
                }
            </Transition>
            </div>
        </div>
    );
};

export default HomePage;