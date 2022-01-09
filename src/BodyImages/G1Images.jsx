import React, { useEffect, useRef, useState } from 'react';
import s from './B1Images.module.css';

const G1Images = () => {
    const images = [
        {id: 1, src: require('../img/g1/g1_1.jpg')},
        {id: 2, src: require('../img/g1/g1_2.jpg')},
        {id: 3, src: require('../img/g1/g1_3.jpg')},
        {id: 4, src: require('../img/g1/g1_4.jpg')},
        {id: 5, src: require('../img/g1/g1_5.jpg')},
        {id: 6, src: require('../img/g1/g1_6.jpg')},
        {id: 7, src: require('../img/g1/g1_7.jpg')}
    ];
    const delay = 4000;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1), delay)
        return () => {
            resetTimeout();
        }
    }, [index]);
    return (
        <div className={s.slideshow}>
            <img src={require('../img/left_arrow.png')} className={s.body__arr} />
            <div style={{ transform: `translate3d(${-index * 6}%, 0, 0)` }} className={s.slideshowSlider}>
                {images.map(({src}) => {
                    console.log(src)
                    return (
                        <img
                        className={s.slide_g1}
                        key={src}
                        src={src}
                        />
                    )
                })}
            </div>
            <img src={require('../img/right_arrow.png')} className={`${s.body__arr} ${s.right}`} />
        </div>
    );
};

export default G1Images;