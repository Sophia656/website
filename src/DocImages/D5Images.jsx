import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './DocImages.module.css';

const D5Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const fifthImages = [
        <img className={s.slide_width} src={require("../img/d5/d5_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d5/d5_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/d5/d5_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d5/d5_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d5/d5_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d5/d5_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d5/d5_7.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/d5/d5_8.jpg")} onDragStart={handleDragStart} />,
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
            <div className={s.slideshow} id='docPage3'>
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
                items={fifthImages} 
                responsive={responsive} 
                />
            </div>
        </div>
    );
};

export default D5Images;