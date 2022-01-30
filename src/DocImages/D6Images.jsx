import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './DocImages.module.css';

const D6Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const sixthImages = [
        <img className={s.slide} src={require("../img/d6/d6_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d6/d6_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d6/d6_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d6/d6_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d6/d6_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d6/d6_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d6/d6_7.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d6/d6_8.jpg")} onDragStart={handleDragStart} />,
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
                items={sixthImages} 
                responsive={responsive} 
                />
            </div>
        </div>
    );
};

export default D6Images;