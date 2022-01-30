import React, { useState } from 'react';
import s from './HomePages.module.css';
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
        <div className={s.home_pages__wrapper} id='homePage1'>
            <animated.div
            className={s.home_pages__content_wrapper}
            style={{ size, ...rest }}
            onClick={() => setOpenImages(openImages => !openImages)}>
                {openImages
                ?
                <PackageOfImgages transition={transition} />
                :
                    <div className={s.home_pages__visible_content_wrapper}>
                        <animated.img style={rotateImg} className={s.home_pages__title_image} src={require('../img/g2/g2_2.jpg')} />
                        <img className={s.home_pages__right_click} src={require('../img/click.gif')} />
                        <span className={s.home_pages__span}>I AM COMMITTED TO A HUMANISTIC UNDERSTANDING OF LIFE THAT IS CENTERED ON THE ESSENCE OF THE HUMAN BEING.</span>
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
            <animated.img style={{ rotateZ }} className={s.home_pages__down_arr} src={downArr} />
            </Link>
        </div>
    );
};

export default FirstPage;