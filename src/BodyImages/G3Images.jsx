import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './BodyImages.module.css';

const G3Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <div className={s.slide_width} style={{ backgroundImage: `url(${require("../img/g3/g3_1.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/g3/g3_2.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/g3/g3_3.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/g3/g3_4.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/g3/g3_5.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/g3/g3_6.jpg")})` }} onDragStart={handleDragStart}/>,
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
        <div className={s.slideshow}>
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
    );
};

export default G3Images;