import React, { useState } from 'react';
import downArr from '../img/down_arrow.png';
import s from './Body.module.css';
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import B1Images from '../BodyImages/B1Images';
import G1Images from '../BodyImages/G1Images';
import { Link, animateScroll as scroll } from "react-scroll";
import G2Images from '../BodyImages/G2Images';
import G3Images from '../BodyImages/G3Images';
import G4Images from '../BodyImages/G4Images';
import G5Images from '../BodyImages/G5Images';
import useWindowDimensions from '../components/hooks/useWindowDimensions';

const BodyContent = () => {
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

    const { width } = useWindowDimensions();

    return (
        <div className={s.body__wrapper}>
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
                    item && <animated.div style={styles} className={s.body__title_wrapper}>
                        <div className={s.body__title_img} style={{ backgroundImage: `url(${require("../img/body_title3.jpg")})` }}/>
                        {width <= 576
                        ? <div className={s.body__mobile_text}>BODY</div>
                        : <></>
                        }
                        <Link
                        activeClass="active"
                        to="bodyPage1"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-13}
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
                {width > 768
                ?
                <Link
                activeClass="active"
                to="bodyPage2"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-13}
                >
                    <img className={s.arr__down} src={downArr} />
                </Link>
                : <span className={s.body__span}>TO STOP THE LANE, CLICK THE PHOTO</span>
                }
                {width <= 768
                ? <span className={s.body__span}>TO STOP THE LANE, CLICK THE PHOTO</span>
                : <></>
                }
                <B1Images />
                {width <= 768
                ? <span className={s.body__span}>TO STOP THE LANE, CLICK THE PHOTO</span>
                : <></>
                }
                <G2Images />
                {width > 768
                ? <span className={s.body__span}>TO STOP, HOVER OVER THE PHOTO FEED</span>
                : <></>
                }
                {width > 768
                ?
                <Link
                activeClass="active"
                to="bodyPage3"
                spy={true}
                smooth={true}
                duration={1000}
                >
                    <img className={s.arr__down} src={downArr} />
                </Link>
                : <span className={s.body__span}>TO STOP THE LANE, CLICK THE PHOTO</span>
                }
                <G3Images />
                {width <= 768
                ? <span className={s.body__span}>TO STOP THE LANE, CLICK THE PHOTO</span>
                : <></>
                }
                <G4Images id='bodyPage3' />
                {width > 768
                ? <span className={s.body__span}>TO STOP, HOVER OVER THE PHOTO FEED</span>
                : <span className={s.body__span}>TO STOP THE LANE, CLICK THE PHOTO</span>
                }
                <G5Images />
                {width > 768
                ? <img className={s.arr__top} src={downArr} onClick={scrollToTop} />
                : <></>
                }
            </div>
            :
            <></>
            }
        </div>
    );
};

export default BodyContent;