import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './BodyImages.module.css';

const G4Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide} src={require("../img/g4/g4_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/g4/g4_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_7.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_8.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_9.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_10.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_11.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_12.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_13.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/g4/g4_14.jpg")} onDragStart={handleDragStart} />,
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
        <div className={s.slideshow} id='bodyPage3'>
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

export default G4Images;