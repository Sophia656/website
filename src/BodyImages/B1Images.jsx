import React, { useEffect, useRef, useState } from 'react';
import s from './B1Images.module.css';

const B1Images = () => {
    const images = [
        {src: require('../img/b1/b1_1.jpg')},
        {src: require('../img/b1/b1_2.jpg')},
        {src: require('../img/b1/b1_3.jpg')},
        {src: require('../img/b1/b1_4.jpg')},
        {src: require('../img/b1/b1_5.jpg')},
        {src: require('../img/b1/b1_6.jpg')},
        {src: require('../img/b1/b1_7.jpg')},
        {src: require('../img/b1/b1_8.jpg')},
        {src: require('../img/b1/b1_9.jpg')}
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
            //не дох до конца - ?
            prevIndex === images.length + 2 ? 0 : prevIndex + 1),1000, delay)
        return () => {
            resetTimeout();
        }
    }, [index]);
    console.log(index)
    return (
        <div className={`${s.slideshow} ${s.b1}`}>
            <img src={require('../img/left_arrow.png')} className={s.body__arr} />
            <div style={{ transform: `translate3d(${-index * 2}%, 0, 0)` }} className={s.slideshowSlider}>
                {images.map(({src}) => {
                    return (
                        <img
                        className={s.slide_b1}
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

export default B1Images;