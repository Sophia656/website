import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import useWindowDimensions from '../components/hooks/useWindowDimensions';
import s from './BodyImages.module.css';

const B1Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide} src={require("../img/b1/b1_0.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/b1/b1_1.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/b1/b1_2.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/b1/b1_3.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/b1/b1_4.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/b1/b1_5.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/b1/b1_6.jpg")} onDragStart={handleDragStart} />,
        <img className={s.slide} src={require("../img/b1/b1_7.jpg")} onDragStart={handleDragStart} />,
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
            autoPlayDirection='rtl' 
            animationType='fadeout' 
            autoWidth
            animationDuration='2500' 
            keyboardNavigation='true' 
            disableButtonsControls 
            disableDotsControls 
            autoPlay 
            autoPlayInterval="200" 
            infinite='true' 
            items={images} 
            responsive={responsive} 
            />
        </div>
    );
};

export default B1Images;