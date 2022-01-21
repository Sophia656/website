import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import useWindowDimensions from '../components/hooks/useWindowDimensions';
import s from './BodyImages.module.css';

const B1Images = () => {
    const handleDragStart = (e) => e.preventDefault();
    const images = [
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/b1/b1_0.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/b1/b1_1.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/b1/b1_2.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/b1/b1_3.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/b1/b1_4.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/b1/b1_5.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/b1/b1_6.jpg")})` }} onDragStart={handleDragStart}/>,
        <div className={s.slide} style={{ backgroundImage: `url(${require("../img/b1/b1_7.jpg")})` }} onDragStart={handleDragStart}/>,
    ];
    // const { height, width } = useWindowDimensions();
    // console.log(height)
    // console.log('width', width)

    const responsive = {
        0: {
            items: 1,
        },
        767: {
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
// export { B1Images as default } from '../BodyImages/B1Images';
export default B1Images;