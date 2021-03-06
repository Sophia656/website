import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './PeopleImages.module.css';

const P2Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide} src={require("../img/p2/p2_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_7.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_8.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_9.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p2/p2_10.jpg")} onDragStart={handleDragStart} />,
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
            items={images} 
            responsive={responsive} 
            />
        </div>
    );
};

export default P2Images;