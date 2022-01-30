import React, { useState } from 'react';
import s from './HomePages.module.css';
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
import { useRotateImg } from '../components/hooks/useRotateImg';
  

const ThirdPage = () => {
    const firstImgages = [
      <img className={s.item} src={require('../img/home3/h1_4.jpg')} />,
      <img className={s.item} src={require('../img/home3/h1_3.JPG')} />,
      <img className={s.item} src={require('../img/home3/p5_1.jpg')} />, 
      <img className={s.item} src={require('../img/b1/b1_2.jpg')} />,
      <img className={s.item} src={require('../img/d2/d2_5.jpg')} />,
      <img className={s.item} src={require('../img/home3/h1_1.JPG')} />,
      <img className={s.item} src={require('../img/home3/h1_2.jpg')} />,
      <img className={s.item} src={require('../img/g4/g4_9.jpg')} />,
    ];
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
  //animated image
  const rotateImg = useRotateImg();
    
    return (
        <div className={s.home_pages__wrapper} id="homePage3">
            <animated.div
            className={s.home_pages__content_wrapper}
            style={rest}
            onClick={() => setOpenImages(openImages => !openImages)}>
              {openImages
              ?
              <PackageOfImgages transition={transition} />
              :
                <div className={s.home_pages__visible_content_wrapper}>
                <animated.img style={rotateImg} className={s.home_pages__title_image} src={require('../img/home3/p5_9.jpg')} />
                <img className={s.home_pages__right_click} src={require('../img/click.gif')} />
                <span style={{color: '#202020', textShadow: '3px 2px 1px #dbcfc0a6'}} className={s.home_pages__span}>IN OTHER WORDS, THE SHOT CAPTURED IN AN INSTANT IS THE QUINTESSENCE OF THE CONSCIOUS AND THE UNCONSCIOUS.</span>
                </div>
              }
            </animated.div>
            <animated.img className={s.home_pages__top_arr} src={downArr} onClick={scrollToTop} />
        </div>
    );
};

export default ThirdPage;