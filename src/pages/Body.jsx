import React, { useEffect, useState } from 'react';
import s from './Body.module.css';
import AgeVerification from '../components/AgeVerification';
import BodyContent from './BodyContent';


const Body = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    const scrollHandler = (e) => {
        console.log('scroll')
    }
    
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