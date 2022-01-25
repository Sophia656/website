import React from 'react';
import loader_web from '../img/loader1.gif';
import loader_tab from '../img/loader2.gif';
import loader_mob from '../img/loader3.gif';
import useWindowDimensions from './hooks/useWindowDimensions';

const Loader = () => {
    const { width } = useWindowDimensions();
    return (
        <div style={{background: '#080604', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
            {width <= 520
            ? <img src={loader_mob} style={{minWidth: '100vw', maxHeight: '100vh', cursor: 'none'}}/>
            :
            <div>
                {width <= 912
                    ? <img src={loader_tab} style={{minWidth: '100vw', maxHeight: '100vh', cursor: 'none'}}/>
                    : 
                    <img src={loader_web} style={{minWidth: '100vw', maxHeight: '100vh', cursor: 'none'}}/>
                    }
            </div>
            }
        </div>
    );
};

export default Loader;