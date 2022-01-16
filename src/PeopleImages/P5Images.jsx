import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './PeopleImages.module.css';
// import { Link, animateScroll, options as Scroll } from "react-scroll";

const P5Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide_g1} src={require('../img/p5/p5_1.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/p5/p5_2.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/p5/p5_3.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/p5/p5_4.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/p5/p5_5.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/p5/p5_6.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/p5/p5_7.JPG')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/p5/p5_8.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/p5/p5_9.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/p5/p5_10.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/p5/p5_11.jpg')} onDragStart={handleDragStart} />,
        // <img className={s.slide_g1_6} src={require('../img/p5/p5_12.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/p5/p5_13.jpg')} onDragStart={handleDragStart} />,
        // <img className={s.slide_g1_6} src={require('../img/p5/p5_14.jpg')} onDragStart={handleDragStart} />,
        // <img className={s.slide_g1_6} src={require('../img/p5/p5_15.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/p5/p5_16.jpg')} onDragStart={handleDragStart} />,
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
        <div className={`${s.slideshow} ${s.b1}`}>
            <img src={require('../img/left_arrow.png')} className={s.body__arr} />
            <AliceCarousel autoPlayDirection='rtl' animationType='fadeout' animationDuration='1700' autoWidth keyboardNavigation='true' disableButtonsControls disableDotsControls autoPlay autoPlayInterval='200' infinite='true' items={images} responsive={responsive} />
            <img src={require('../img/right_arrow.png')} className={`${s.body__arr} ${s.right}`} />
        </div>
    );
};

export default P5Images;