import React, { useState } from 'react';
import img from '../img/people_title1.jpg';
import downArr from '../img/down_arrow.png';
import s from './People.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import P1Images from '../PeopleImages/P1Images';
import P2Images from '../PeopleImages/P2Images';
import P3Images from '../PeopleImages/P3Images';
import P4Images from '../PeopleImages/P4Images';
import useWindowDimensions from '../components/hooks/useWindowDimensions';

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
    );
    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    const { width } = useWindowDimensions();
    
    return (
        <div className={s.people__wrapper}>
            <Transition
                items={showTitle}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={showTitle}
                config={config.stiff}
                onRest={() => setShowTitle(true)}>
                {(styles, item) =>
                item && <animated.div className={s.people__title_wrapper} style={styles}>
                    <div className={s.people__title_img} style={{ backgroundImage: `url(${require("../img/people_title1.jpg")})` }}/>
                    {width <= 576
                    ? <div className={s.people__mobile_text}>PEOPLE</div>
                    : <></>
                    }
                    <Link
                    activeClass="active"
                    to="peoplePage1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-18}
                    >
                        <animated.img style={{ rotateZ }} className={s.people__title_arr} src={downArr} />
                    </Link>
                </animated.div>
                }
            </Transition>
            {showTitle
            ?
            <div>
                <P1Images />
                {width > 768
                ? <span className={s.span_people}>TO STOP, HOVER OVER THE PHOTO FEED</span>
                : <span className={s.span_people}>TO STOP THE LANE, CLICK THE PHOTO</span>
                }
                <P2Images />
                {width > 768
                ?
                <Link
                activeClass="active"
                to="peoplePage2"
                spy={true}
                smooth={true}
                duration={500}
                offset={-10}
                >
                    <img className={s.arr__down} src={downArr} />
                </Link>
                : <span className={s.span_people}>TO STOP THE LANE, CLICK THE PHOTO</span>
                }
                <P3Images />
                {width > 768
                ? <span className={s.span_people}>TO STOP, HOVER OVER THE PHOTO FEED</span>
                : <span className={s.span_people}>TO STOP THE LANE, CLICK THE PHOTO</span>
                }
                <P4Images />
                {width > 768
                ? <img className={s.arr__top} src={downArr} onClick={scrollToTop} />
                : <></>
                }
            </div>
            : <></>
            }
        </div>
    );
};

export default People;