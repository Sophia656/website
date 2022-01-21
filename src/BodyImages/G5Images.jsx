import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './BodyImages.module.css';

const G5Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide_g1_6} src={require('../img/g5/g5_1.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g5/g5_2.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g5/g5_3.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/g5/g5_4.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g5/g5_5.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g5/g5_6.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/g5/g5_7.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g5/g5_8.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g5/g5_9.jpg')} onDragStart={handleDragStart} />,
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

export default G5Images;