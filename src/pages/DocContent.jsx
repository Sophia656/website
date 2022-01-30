import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import downArr from '../img/down_arrow.png';
import s from '../DocImages/DocImages.module.css';
import useWindowDimensions from '../components/hooks/useWindowDimensions';
import D1Images from '../DocImages/D1Images';
import D2Images from '../DocImages/D2Images';
import D3Images from '../DocImages/D3Images';
import D4Images from '../DocImages/D4Images';
import D5Images from '../DocImages/D5Images';
import D6Images from '../DocImages/D6Images';

const DocContent = () => {
    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    const { width } = useWindowDimensions();

    return (
        <div>
            <D1Images />
            {width > 768
            ? <span className={s.span_doc}>TO STOP, HOVER OVER THE PHOTO FEED</span>
            : <span className={s.span_doc}>TO STOP THE LANE, CLICK THE PHOTO</span>
            }
            <D2Images />
            {width <= 768
            ? <span className={s.span_doc}>TO STOP THE LANE, CLICK THE PHOTO</span>
            :
            <Link
            activeClass="active"
            to="docPage2"
            spy={true}
            smooth={true}
            duration={500}
            offset={-5}
            >
                <img className={s.arr__down} src={downArr} alt="" />
            </Link>
            }
            <D3Images />
            {width > 768
            ? <span className={s.span_doc}>TO STOP, HOVER OVER THE PHOTO FEED</span>
            : <span className={s.span_doc}>TO STOP THE LANE, CLICK THE PHOTO</span>
            }
            <D4Images />
            {width <= 768
            ? <span className={s.span_doc}>TO STOP THE LANE, CLICK THE PHOTO</span>
            :
            <Link
            activeClass="active"
            to="docPage3"
            spy={true}
            smooth={true}
            duration={500}
            offset={-5}
            >
                <img className={s.arr__down} src={downArr} alt="" />
            </Link>
            }
            <D5Images />
            {width > 768
            ? <span className={s.span_doc}>TO STOP, HOVER OVER THE PHOTO FEED</span>
            : <span className={s.span_doc}>TO STOP THE LANE, CLICK THE PHOTO</span>
            }
            <D6Images />
            {width > 768
            ? <img className={s.arr__top} src={downArr} onClick={scrollToTop} />
            : <></>
            }
        </div>
    );
};

export default DocContent;