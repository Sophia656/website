import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './PeopleImages.module.css';

const P3Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide_width} src={require("../img/p3/p3_1.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p3/p3_2.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p3/p3_3.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/p3/p3_4.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p3/p3_5.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p3/p3_6.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p3/p3_7.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/p3/p3_8.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p3/p3_9.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/p3/p3_10.JPG")} onDragStart={handleDragStart} />,
        <img className={s.slide_width} src={require("../img/p3/p3_11.JPG")} onDragStart={handleDragStart} />,
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
        <div className={s.slideshow} id='peoplePage2'>
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

export default P3Images;