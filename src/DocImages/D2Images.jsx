import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './DocImages.module.css';

const D2Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const secondImages = [
        <img className={s.slide_width} src={require("../img/d2/d2_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d2/d2_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d2/d2_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d2/d2_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d2/d2_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d2/d2_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d2/d2_7.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d2/d2_8.jpg")} onDragStart={handleDragStart} />,
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
                items={secondImages} 
                responsive={responsive} 
                />
            </div>
        </div>
    );
};

export default D2Images;