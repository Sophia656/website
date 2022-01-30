import React, { useState } from 'react';
import downArr from '../img/down_arrow.png';
import s from './Documental.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { Transition, animated, config } from 'react-spring';
import { useRotateArrow } from '../components/hooks/useRotateArrow';
import useWindowDimensions from '../components/hooks/useWindowDimensions';
import D1Images from '../DocImages/D1Images';
import DocContent from './DocContent';

const Documental = () => {
    const [showTitle, setShowTitle] = useState(false);

    const {rotateZ} = useRotateArrow();

    const { width } = useWindowDimensions();

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
                item && <animated.div className={s.doc__title_wrapper} style={styles}>
                    <div className={s.doc__title_img} style={{ backgroundImage: `url(${require("../img/doc_title.jpg")})` }}/>
                    {width <= 576
                    ? <div className={s.doc__mobile_text}>DOCUMENTAL</div>
                    : <></>
                    }
                    <Link
                    activeClass="active"
                    to="docPage1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-5}
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
                <DocContent />
            </div>
            : <></>
            }
        </div>
    );
};

export default Documental;