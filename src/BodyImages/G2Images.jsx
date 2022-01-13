import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './B1Images.module.css';

const G2Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide_g1} src={require('../img/g2/g2_1.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1_6} src={require('../img/g2/g2_2.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g2/g2_3.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g2/g2_4.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g2/g2_5.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g2/g2_6.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_g1} src={require('../img/g2/g2_7.jpg')} onDragStart={handleDragStart} />,
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
            <img src={require('../img/left_arrow.png')} className={s.body__arr} />
            <AliceCarousel animationType='fadeout' animationDuration='1700' autoWidth keyboardNavigation='true' disableButtonsControls disableDotsControls autoPlay autoPlayInterval='200' infinite='true' items={images} responsive={responsive} />
            <img src={require('../img/right_arrow.png')} className={`${s.body__arr} ${s.right}`} />
        </div>
    );
};

export default G2Images;