import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './BodyImages.module.css';

const G1Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide} src={require("../img/g1/g1_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g1/g1_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g1/g1_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g1/g1_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g1/g1_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/g1/g1_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g1/g1_7.jpg")} onDragStart={handleDragStart} />,
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
        <div className={s.slideshow} id='bodyPage1'>
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
            items={images} 
            responsive={responsive} 
            />
        </div>
    );
};

export default G1Images;