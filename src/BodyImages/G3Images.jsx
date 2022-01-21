import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './BodyImages.module.css';

const G3Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide_g1_6} src={require('../img/g3/g3_1.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g3/g3_2.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g3/g3_3.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g3/g3_4.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g3/g3_5.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g3/g3_6.jpg')} onDragStart={handleDragStart} />,
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
        <div className={`${s.slideshow} ${s.b1}`}>
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