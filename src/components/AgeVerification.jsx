import React from 'react';
import { Link } from 'react-router-dom';
import s from './AgeVerification.module.css';

const AgeVerification = ({ageVarification, setAgeVarification}) => {
    const ageClasses = [s.av__wrapper]
    if (ageVarification === false) {
        ageClasses.push(s.unblock)
    }

    return (
        <div className={ageClasses.join(' ')}>
            <div className={s.av__box_wrapper}>
                <h3 className={s.av__h3}>CONTENT WARNING</h3>
                <span className={s.av__span}>YOU ARE ABOUT TO ENTER A PAGE THAT MAY CONTAIN CONTENT OF AN ADULT NATURE. THIS PHOTOS ARE DESIGNED FOR ADULTS ONLY. PLEASE CONFIRM YOUR AGE FOR VIEWING.</span>
                <div className={s.av__buttons_wrapper}>
                    <div className={`${s.av__buttons} ${s.older}`} onClick={() => setAgeVarification(false)}>I AM 18 OR OLDER</div>
                    <Link className={`${s.av__buttons} ${s.under}`} to='/home'>I AM UNDER 18</Link>
                </div>
            </div>
        </div>
    );
};

export default AgeVerification;