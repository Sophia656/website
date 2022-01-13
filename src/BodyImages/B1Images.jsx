import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import s from './B1Images.module.css';

const B1Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <img className={s.slide_b1} src={require('../img/b1/b1_0.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_b1} src={require('../img/b1/b1_1.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_b1} src={require('../img/b1/b1_2.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_b1} src={require('../img/b1/b1_3.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_b1} src={require('../img/b1/b1_4.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_b1} src={require('../img/b1/b1_5.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_b1} src={require('../img/b1/b1_6.jpg')} onDragStart={handleDragStart} />,
        <img className={s.slide_b1} src={require('../img/b1/b1_7.jpg')} onDragStart={handleDragStart} />,
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
            <AliceCarousel autoPlayDirection='rtl' animationType='fadeout' animationDuration='1700' keyboardNavigation='true' disableButtonsControls disableDotsControls autoPlay autoPlayInterval="200" infinite='true' items={images} responsive={responsive} />
            <img src={require('../img/right_arrow.png')} className={`${s.body__arr} ${s.right}`} />
        </div>
    );
};
export default B1Images;