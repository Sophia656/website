import React, { useState } from 'react';
import s from '../pages/HomePage.module.css';
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
  

const ThirdPage = () => {
    const firstImgages = [
        <img className={s.item} src={require('../img/b1/b1_1.jpg')} />,
        <img className={s.item} src={require('../img/g1/g1_4.jpg')} />,
        <img className={s.item} src={require('../img/g4/g4_1.jpg')} />,
        <img className={s.item} src={require('../img/b1/b1_8.jpg')} />,
        <img className={s.item} src={require('../img/g5/g5_6.jpg')} />,
        <img className={s.item} src={require('../img/g3/g3_2.jpg')} />,
        <img className={s.item} src={require('../img/g3/g3_3.jpg')} />,
        <img className={s.item} src={require('../img/g1/g1_1.jpg')} />,
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

    //span
    const styles = useSpring({
        loop: true,
        config: {
            duration: 2000,
          },
        to: [
            {
                rotateX: 360,
                // rotateZ: 360,
                // opacity: 1,
              },
              {
                rotateX: 180,
                // rotateZ: 180,
                opacity: 0,
              },
        ],
        from: { 
            rotateX: 180,
            // rotateZ: 180,
            // opacity: 0,
        },
      })
    
    return (
        <div className={s.home_page1__wrapper} id='homePage1'>
            <animated.div
            style={rest}
            onClick={() => setOpenImages(openImages => !openImages)}>
            {openImages
            ?
            <PackageOfImgages transition={transition} />
            :
                <div onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}>
                <animated.img className={s.title__image1} src={require('../img/d1/d1_54.jpg')} />
                {over 
                ? <img className={s.click1} src={require('../img/click.gif')} />
                : <></>
                }
                <span style={{color: '#161616', textShadow: '2px 2px 3px #dbcfc0'}} className={s.home__span1}>IN OTHER WORDS,<br/>THE SHOT CAPTURED<br/>IN AN INSTANT<br/>IS THE QUINTESSENCE OF<br/>
                <animated.span style={styles}>THE CONSCIOUS AND THE UNCONSCIOUS.</animated.span>
                </span>
                </div>
            }
            </animated.div>
        </div>
    );
};

export default ThirdPage;