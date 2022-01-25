import React, { useState } from 'react';
import s from '../pages/HomePage.module.css';
import downArr from '../img/down_arrow.png';
import {
    useChain,
    animated,
    useSpringRef,
} from '@react-spring/web';
import PackageOfImgages from '../HomeContent/PackageOfImgages';
import { useOpenImages } from '../components/hooks/useOpenImages';
import { useTransitionImages } from '../components/hooks/useTransitionImages';
import { Link, animateScroll as scroll } from "react-scroll";
import { useRotateArrow } from '../components/hooks/useRotateArrow';
import { useRotateImg } from '../components/hooks/useRotateImg';
  

const FirstPage = () => {
    const {rotateZ} = useRotateArrow();
    const firstImgages = [
        <img className={s.item} src={require('../img/b1/b1_4.jpg')} />,
        <img className={s.item} src={require('../img/p3/p3_2.JPG')} />,
        <img className={s.item} src={require('../img/b1/b1_6.jpg')} />,
        <img className={s.item} src={require('../img/p2/p2_8.jpg')} />,
        <img className={s.item} src={require('../img/home3/h1_5.JPG')} />,
        <img className={s.item} src={require('../img/p4/p4_12.JPG')} />,
        <img className={s.item} src={require('../img/g4/g4_5.jpg')} />,
        <img className={s.item} src={require('../img/b1/b1_8.jpg')} />,
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

    //animated image
    const rotateImg = useRotateImg();


    return (
        <div className={s.home_page1__wrapper} id='homePage1'>
            <animated.div
            style={{ size, ...rest }}
            onClick={() => setOpenImages(openImages => !openImages)}>
            {openImages
            ?
            <PackageOfImgages transition={transition} />
            :
                <div onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}>
                    <animated.img style={rotateImg} className={s.title__image1} src={require('../img/g2/g2_2.jpg')} />
                    {over
                    ? <img className={s.click1} src={require('../img/click.gif')} />
                    : <></>
                    }
                    <span className={s.home__span1}>I AM COMMITTED TO A HUMANISTIC<br/>UNDERSTANDING OF LIFE<br/>THAT IS CENTERED ON<br/>THE ESSENCE OF THE HUMAN BEING.</span>
                </div>
            }
            </animated.div>
            <Link
            activeClass="active"
            to="homePage2"
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            >
            <animated.img style={{ rotateZ }} className={s.doc__title_arr} src={downArr} />
            </Link>
        </div>
    );
};

export default FirstPage;