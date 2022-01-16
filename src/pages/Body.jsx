import React, { useState } from 'react';
import img from '../img/body_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './Body.module.css';
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import B1Images from '../BodyImages/B1Images';
// const B1Images = React.lazy(() => import('../BodyImages/B1Images'));
import G1Images from '../BodyImages/G1Images';
// const G1Images = React.lazy(() => import('../BodyImages/G1Images'));
import { Link, animateScroll as scroll } from "react-scroll";
import G2Images from '../BodyImages/G2Images';
// const G2Images = React.lazy(() => import('../BodyImages/G2Images'));
import G3Images from '../BodyImages/G3Images';
// const G3Images = React.lazy(() => import('../BodyImages/G3Images'));
import G4Images from '../BodyImages/G4Images';
// const G4Images = React.lazy(() => import('../BodyImages/G4Images'));
import G5Images from '../BodyImages/G5Images';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import AgeVerification from '../components/AgeVerification';
import BodyContent from './BodyContent';
// const G5Images = React.lazy(() => import('../BodyImages/G5Images'));
// import { Link } from 'react-scroll';

const Body = () => {
    
    //AGE VARIFICATION
    const [ageVarification, setAgeVarification] = useState(true);

    return (
        <div className={s.body__wrapper}>
            {ageVarification
            ?
            <AgeVerification ageVarification={ageVarification} setAgeVarification={setAgeVarification} />
            :
            <BodyContent />
            }
        </div>
    );
};

export default Body;