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
  

const SecondPage = () => {
    const {rotateZ} = useRotateArrow();
    const firstImgages = [
        <img className={s.item} src={require('../img/b1/b1_1.jpg')} />,
        <img className={s.item} src={require('../img/g1/g1_4.jpg')} />,
        <img className={s.item} src={require('../img/g3/g3_3.jpg')} />,
        <img className={s.item} src={require('../img/g5/g5_6.jpg')} />,
        
        
        <img className={s.item} src={require('../img/g4/g4_1.jpg')} />,
        <img className={s.item} src={require('../img/g3/g3_2.jpg')} />,
        <img className={s.item} src={require('../img/g1/g1_1.jpg')} />,
        <img className={s.item} src={require('../img/g2/g2_7.jpg')} />,
        
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
        <div className={s.home_pages__wrapper} id='homePage2'>
            <animated.div
            className={s.home_pages__content_wrapper}
            style={{ size, ...rest }}
            onClick={() => setOpenImages(openImages => !openImages)}>
                {openImages
                ?
                <PackageOfImgages transition={transition} />
                :
                <div className={s.home_pages__visible_content_wrapper} onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}>
                    
                <span className={s.home_pages__span2}>WHERE FORM AND CONTENT ARE INEXTRICABLY LINKED AND THE HUMAN BODY IS A REFLECTION OF HIS INNER WORLD.</span>
                {over 
                    ? <img className={s.home_pages__left_click} src={require('../img/click.gif')} />
                    : <></>
                    }
                <animated.img style={rotateImg} className={s.home_pages__title_image_vertical} src={require('../img/g1/g1_4.jpg')} />
                </div>
                }
            </animated.div>
            <Link
            activeClass="active"
            to="homePage3"
            spy={true}
            smooth={true}
            duration={500}
            >
            <animated.img style={{ rotateZ }} className={s.home_pages__down_arr} src={downArr} />
            </Link>
        </div>
    );
};

export default SecondPage;