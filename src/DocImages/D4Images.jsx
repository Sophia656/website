import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './DocImages.module.css';

const D4Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const fourthImages = [
        <img className={s.slide_width} src={require("../img/d4/d4_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d4/d4_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d4/d4_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d4/d4_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d4/d4_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d4/d4_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d4/d4_7.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d4/d4_8.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d4/d4_9.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d4/d4_10.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d4/d4_11.jpg")} onDragStart={handleDragStart} />,
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
            <div className={s.slideshow}>
                <AliceCarousel 
                animationType='fadeout' 
                animationDuration='2500' 
                autoWidth 
                keyboardNavigation='true' 
                disableButtonsControls 
                disableDotsControls 
                autoPlay 
                autoPlayInterval='200' 
                infinite='true' 
                items={fourthImages} 
                responsive={responsive} 
                />
            </div>
        </div>
    );
};

export default D4Images;