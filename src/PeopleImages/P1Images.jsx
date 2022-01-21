import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './PeopleImages.module.css';

const P1Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/p1/p1_1.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/p1/p1_2.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/p1/p1_3.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/p1/p1_4.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide_width} style={{ backgroundImage: `url(${require("../img/p1/p1_5.jpg")})` }} onDragStart={handleDragStart}/>,
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
        <div className={s.slideshow} id='peoplePage1'>
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

export default P1Images;