import React, { useState, Suspense } from 'react';
import img from '../img/body_title3.jpg';
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
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import AgeVerification from '../components/AgeVerification';
import useWindowDimensions from '../components/hooks/useWindowDimensions';
// const G5Images = React.lazy(() => import('../BodyImages/G5Images'));
// import { Link } from 'react-scroll';

const BodyContent = () => {
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

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const { height, width } = useWindowDimensions();

    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
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
                            <div className={s.body__title_img} style={{ backgroundImage: `url(${require("../img/body_title3.jpg")})` }}/>,
                            {/* <img className={s.body__title_img} src={img} /> */}
                            <Link
                            activeClass="active"
                            to="bodyPage1"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-20}
                            >
                                <animated.img style={{ rotateZ }} className={s.body__title_arr} src={downArr} />
                            </Link>
                        </animated.div>
                        }
                    </Transition>
                {showTitle
                ?
                <div className={s.body__img__wrapper}>
                    <G1Images />
                    {width > 768
                    ? <span className={s.body__span}>TO STOP, HOVER OVER THE PHOTO FEED</span>
                    : <></>
                    }
                    {/* <span className={s.body__span}>TO STOP, HOVER OVER THE PHOTO FEED</span> */}
                    <Link
                    activeClass="active"
                    to="bodyPage2"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-20}
                    >
                        <img className={s.arr__down} src={downArr} />
                    </Link>
                    <B1Images />
                    <G2Images />
                    {width > 768
                    ? <span className={s.body__span}>TO STOP, HOVER OVER THE PHOTO FEED</span>
                    : <></>
                    }
                    {/* <span className={s.body__span}>TO STOP, HOVER OVER THE PHOTO FEED</span> */}
                    <Link
                    activeClass="active"
                    to="bodyPage3"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-20}
                    >
                        <img className={s.arr__down} src={downArr} />
                    </Link>
                    <G3Images />
                    <G4Images id='bodyPage3' />
                    {width > 768
                    ? <span className={s.body__span}>TO STOP, HOVER OVER THE PHOTO FEED</span>
                    : <></>
                    }
                    {/* <span className={s.body__span}>TO STOP, HOVER OVER THE PHOTO FEED</span> */}
                    <G5Images />
                    <img className={s.arr__top} src={downArr} onClick={scrollToTop} />
                </div>
                :
                <h1> </h1>
                }
            </Suspense>
        </div>
    );
};

export default BodyContent;