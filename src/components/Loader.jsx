import React from 'react';
import img from '../img/loader1.gif';

const Loader = () => {
    return (
        <img src={img} style={{minWidth: '100vw', maxHeight: '100vh'}}/>
    );
};

export default Loader;