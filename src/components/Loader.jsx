import React from 'react';
import img from '../img/loader1.gif';

const Loader = () => {
    return (
        <img src={img} style={{maxHeight: '100vh'}}>

        </img>
    );
};

export default Loader;