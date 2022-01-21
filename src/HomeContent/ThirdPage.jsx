import React, { useState } from 'react';
import s from '../pages/HomePage.module.css';
import downArr from '../img/down_arrow.png';
import {
    useChain,
    animated,
    useSpringRef,
    useSpring,
    easings,
} from '@react-spring/web';
import PackageOfImgages from '../HomeContent/PackageOfImgages';
import { useOpenImages } from '../components/hooks/useOpenImages';
import { useTransitionImages } from '../components/hooks/useTransitionImages';
import { Link, animateScroll as scroll } from "react-scroll";
  

const ThirdPage = () => {
    const firstImgages = [
      <img className={s.item} src={require('../img/home3/h1_4.jpg')} />,
      <img className={s.item} src={require('../img/home3/h1_3.JPG')} />,
      <img className={s.item} src={require('../img/home3/p5_1.jpg')} />, 
      <img className={s.item} src={require('../img/b1/b1_2.jpg')} />,
      <img className={s.item} src={require('../img/d1/d1_14.jpg')} />,
      <img className={s.item} src={require('../img/home3/h1_1.JPG')} />,
      <img className={s.item} src={require('../img/home3/h1_2.jpg')} />,
      <img className={s.item} src={require('../img/g4/g4_9.jpg')} />,
    ];
    const [over, setOver] = useState(false);
    const [openImages, setOpenImages] = useState(false);

    const springApi = useSpringRef();
    const { size, ...rest } = useOpenImages(openImages);
    const transApi = useSpringRef();
    const transition = useTransitionImages(openImages, firstImgages, transApi)
    useChain(openImages ? [springApi, transApi] : [transApi, springApi], [
      0,
      openImages ? 0.1 : 0.6
    ]);
    const scrollToTop = () => {
      scroll.scrollToTop(); 
  };
    
    return (
        <div className={s.home_page1__wrapper} id="homePage3">
            <animated.div
            style={rest}
            onClick={() => setOpenImages(openImages => !openImages)}>
            {openImages
            ?
            <PackageOfImgages transition={transition} />
            :
                <div onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}>
                <animated.img className={s.title__image1} src={require('../img/home3/p5_9.jpg')} />
                {over 
                ? <img className={s.click1} src={require('../img/click.gif')} />
                : <></>
                }
                <span style={{color: '#161616', textShadow: '2px 2px 3px #dbcfc0'}} className={s.home__span1}>IN OTHER WORDS,<br/>THE SHOT CAPTURED<br/>IN AN INSTANT<br/>IS THE QUINTESSENCE OF<br/>THE CONSCIOUS AND THE UNCONSCIOUS.</span>
                </div>
            }
            </animated.div>
            <animated.img className={s.doc__title_arr3} src={downArr} onClick={scrollToTop} />
        </div>
    );
};

export default ThirdPage;