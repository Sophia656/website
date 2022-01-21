import React, { useState } from 'react';
import img from '../img/doc_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './Documental.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import DocImages from '../DocImages/DocImages';
import { useRotateArrow } from '../components/hooks/useRotateArrow';

const Documental = () => {
    const [showTitle, setShowTitle] = useState(false);

    const {rotateZ} = useRotateArrow();

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
                    duration={500}
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
            : <></>
            }
        </div>
    );
};

export default Documental;