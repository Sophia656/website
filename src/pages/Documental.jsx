import React, { useState } from 'react';
import img from '../img/doc_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './Documental.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import DocImages from '../DocImages/DocImages';

const Documental = () => {
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
    // const scrollToBottom = () => {
    //     scroll.scrollToBottom();
    // };

    return (
        <div className={s.doc__wrapper}>
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
                    <img className={s.doc__title_img} src={img} alt="" />
                    <Link
                    activeClass="active"
                    to="docPage1"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-20}
                    >
                    <animated.img style={{ rotateZ }} className={s.doc__title_arr} src={downArr} />
                    </Link>
                </animated.div>
                }
            </Transition>
            </div>
            {showTitle
            ?
            <div>
                <DocImages />
            </div>
            :
            <h1> </h1>
            }
        </div>
    );
};

export default Documental;