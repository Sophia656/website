import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-scroll';
import s from './DocImages.module.css';
import downArr from '../img/down_arrow.png';

const DocImages = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide} src={require('../img/d1/d1_1.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_2.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_3.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_4.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_5.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_6.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_7.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require('../img/d1/d1_8.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_9.jpg')} onDragStart={handleDragStart} />,
    ];
    const secondImages = [
        <img className={s.slide_width} src={require('../img/d1/d1_10.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_11.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_12.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_13.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require('../img/d1/d1_14.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_15.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_16.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_17.jpg')} onDragStart={handleDragStart} />,
    ];
    const thirdImages = [
        <img className={s.slide_width} src={require('../img/d1/d1_18.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_19.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_20.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_21.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_22.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_23.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_24.jpg')} onDragStart={handleDragStart} />,
    ];
    const fourthImages = [
        <img className={s.slide_width} src={require('../img/d1/d1_25.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require('../img/d1/d1_26.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_27.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_28.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_29.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_30.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require('../img/d1/d1_31.jpg')} onDragStart={handleDragStart} />,
    ];
    const fifthImages = [
        <img className={s.slide} src={require('../img/d1/d1_32.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_33.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_34.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_35.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require('../img/d1/d1_36.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_37.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require('../img/d1/d1_38.jpg')} onDragStart={handleDragStart} />,
    ];
    const responsive = {
        0: {
            items: 1,
        },
        1024: {
            items: 5
        }
    }

    return (
        <div>
            <div className={`${s.slideshow} ${s.d1}`} id='docPage1'>
                <img src={require('../img/left_arrow.png')} className={s.doc__arr} />
                <AliceCarousel autoPlayDirection='rtl' animationType='fadeout' animationDuration='1700' autoWidth keyboardNavigation='true' disableButtonsControls disableDotsControls autoPlay autoPlayInterval='200' infinite='true' items={images} responsive={responsive} />
                <img src={require('../img/right_arrow.png')} className={`${s.doc__arr} ${s.right}`} />
            </div>
            <span className={s.span_doc}>TO STOP, HOVER OVER THE PHOTO FEED</span>
            <Link
            activeClass="active"
            to="docPage2"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-10}
            >
                <img className={s.arr__down} src={downArr} alt="" />
            </Link>
            <div className={`${s.slideshow} ${s.d1}`}>
                <img src={require('../img/left_arrow.png')} className={s.doc__arr} />
                <AliceCarousel animationType='fadeout' animationDuration='1700' autoWidth keyboardNavigation='true' disableButtonsControls disableDotsControls autoPlay autoPlayInterval='200' infinite='true' items={secondImages} responsive={responsive} />
                <img src={require('../img/right_arrow.png')} className={`${s.doc__arr} ${s.right}`} />
            </div>
            <div className={`${s.slideshow} ${s.d1}`} id='docPage2'>
                <img src={require('../img/left_arrow.png')} className={s.doc__arr} />
                <AliceCarousel autoPlayDirection='rtl' animationType='fadeout' animationDuration='1700' autoWidth keyboardNavigation='true' disableButtonsControls disableDotsControls autoPlay autoPlayInterval='200' infinite='true' items={thirdImages} responsive={responsive} />
                <img src={require('../img/right_arrow.png')} className={`${s.doc__arr} ${s.right}`} />
            </div>
            <span className={s.span_doc}>TO STOP, HOVER OVER THE PHOTO FEED</span>
            <div className={`${s.slideshow} ${s.d1}`}>
                <img src={require('../img/left_arrow.png')} className={s.doc__arr} />
                <AliceCarousel animationType='fadeout' animationDuration='1700' autoWidth keyboardNavigation='true' disableButtonsControls disableDotsControls autoPlay autoPlayInterval='200' infinite='true' items={fourthImages} responsive={responsive} />
                <img src={require('../img/right_arrow.png')} className={`${s.doc__arr} ${s.right}`} />
            </div>
            <div className={`${s.slideshow} ${s.d1}`}>
                <img src={require('../img/left_arrow.png')} className={s.doc__arr} />
                <AliceCarousel autoPlayDirection='rtl' animationType='fadeout' animationDuration='1700' autoWidth keyboardNavigation='true' disableButtonsControls disableDotsControls autoPlay autoPlayInterval='200' infinite='true' items={fifthImages} responsive={responsive} />
                <img src={require('../img/right_arrow.png')} className={`${s.doc__arr} ${s.right}`} />
            </div>
            <span className={s.span_doc}>TO STOP, HOVER OVER THE PHOTO FEED</span>
        </div>
    );
};

export default DocImages;