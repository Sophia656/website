import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './DocImages.module.css';

const D1Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide} src={require("../img/d1/d1_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_7.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d1/d1_8.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_9.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d1/d1_10.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_11.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d1/d1_12.jpg")} onDragStart={handleDragStart} />,
    ];

    const responsive = {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 5
        }
    }

    return (
        <div>
            <div className={s.slideshow} id='docPage1'>
                <AliceCarousel 
                autoPlayDirection='rtl' 
                animationType='fadeout' 
                animationDuration='2500' 
                autoWidth 
                keyboardNavigation='true' 
                disableButtonsControls 
                disableDotsControls 
                autoPlay 
                autoPlayInterval='200' 
                infinite='true' 
                items={images} 
                responsive={responsive} 
                />
            </div>
        </div>
    );
};

export default D1Images;