import React, { useState } from 'react';
import img from '../img/body_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './Body.module.css';
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import B1Images from '../BodyImages/B1Images';
// const B1Images = React.lazy(() => import('../BodyImages/B1Images'));
import G1Images from '../BodyImages/G1Images';
// const G1Images = React.lazy(() => import('../BodyImages/G1Images'));
import { Link, animateScroll as scroll } from "react-scroll";
import G2Images from '../BodyImages/G2Images';
// const G2Images = React.lazy(() => import('../BodyImages/G2Images'));
import G3Images from '../BodyImages/G3Images';
// const G3Images = React.lazy(() => import('../BodyImages/G3Images'));
import G4Images from '../BodyImages/G4Images';
// const G4Images = React.lazy(() => import('../BodyImages/G4Images'));
import G5Images from '../BodyImages/G5Images';
// const G5Images = React.lazy(() => import('../BodyImages/G5Images'));

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
    );
    //SCROLL
    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };
    

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
                        <animated.img style={{ rotateZ }} className={s.body__title_arr} src={downArr} alt="" onMouseOver={{ style: rotateZ}} onClick={scrollToBottom} />
                    </animated.div>
                    }
                </Transition>
            </div>
            {showTitle
            ?
            <div className={s.body__img__wrapper}>
                <G1Images />
                <span>TO STOP, HOVER OVER THE PHOTO FEED</span>
                <B1Images />
                <G2Images />
                <span>TO STOP, HOVER OVER THE PHOTO FEED</span>
                <G3Images />
                <G4Images />
                <span>TO STOP, HOVER OVER THE PHOTO FEED</span>
                <G5Images />
            </div>
            :
            <h1> </h1>
            }
            
        </div>
    );
};

export default Body;