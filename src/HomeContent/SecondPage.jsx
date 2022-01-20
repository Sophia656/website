import React, { useState } from 'react';
import s from '../pages/HomePage.module.css';
import {
    useChain,
    animated,
    useSpringRef,
} from '@react-spring/web';
import PackageOfImgages from '../HomeContent/PackageOfImgages';
import { useOpenImages } from '../components/hooks/useOpenImages';
import { useTransitionImages } from '../components/hooks/useTransitionImages';
  

const SecondPage = () => {
    const firstImgages = [
        <img className={s.item} src={require('../img/b1/b1_1.jpg')} />,
        <img className={s.item} src={require('../img/b1/b1_8.jpg')} />,
        <img className={s.item} src={require('../img/g1/g1_1.jpg')} />,
        <img className={s.item} src={require('../img/g1/g1_4.jpg')} />,
        <img className={s.item} src={require('../img/g4/g4_1.jpg')} />,
        <img className={s.item} src={require('../img/g3/g3_2.jpg')} />,
        <img className={s.item} src={require('../img/g3/g3_3.jpg')} />,
        <img className={s.item} src={require('../img/g5/g5_6.jpg')} />,
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
    
    return (
        <div className={s.home_page1__wrapper} id='homePage2'>
            <animated.div
            style={{ ...rest }}
            onClick={() => setOpenImages(openImages => !openImages)}>
            {openImages
            ?
            <PackageOfImgages transition={transition} />
            :
                <div onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}>
                <animated.img className={s.title__image2} src={require('../img/g1/g1_4.jpg')} />
                {over 
                ? <img className={s.click2} src={require('../img/click.gif')} />
                : <></>
                }
                <span className={s.home__span2}>WHERE FORM AND CONTENT<br/>ARE INEXTRICABLY LINKED<br/>AND THE HUMAN BODY<br/>IS A REFLECTION OF HIS INNER WORLD.</span>
                </div>
            }
            </animated.div>
        </div>
    );
};

export default SecondPage;