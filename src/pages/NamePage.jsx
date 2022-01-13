import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import s from './NamePage.module.css';
import { Transition, animated, config } from 'react-spring';
import AppRouter from '../AppRouter';
// const AppRouter = React.lazy(() => import('../AppRouter'));

const NamePage = () => {
    const [showName, setShowName] = useState(false);
    const [showPages, setShowPages] = useState(false);

    return (
        <div>
            <Navbar setShowPages={setShowPages} />
            {showPages
            ? <AppRouter />
            : <Transition
            items={showName}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            reverse={showName}
            delay={200}
            config={config.stiff}
            onRest={() => setShowName(true)}>

            {(styles, item) =>
            item && 
                <h1 style={styles} className={s.name}>ANTROPOVA SOPHIA</h1>
            }
            </Transition>
            }
        </div>
    );
};

export default NamePage;