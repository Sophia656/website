import React, { useEffect, useRef, useState } from 'react';
import img from '../img/home_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './HomePage.module.css';
import { Transition, animated, config, useSpring, easings } from 'react-spring';
import HomeText from '../components/HomeText';
import AnimatedWorksHP from '../components/AnimatedWorksHP';

const HomePage = () => {
    const [showTitle, setShowTitle] = useState(false);
    const {rotateZ} = useSpring({
        from: {
            rotateZ: 180,
          },
          to: {
            rotateZ: 360,
          },
          config: {
            duration: 4000,
            easing: easings.easeInOutQuart,
          },
        //   loop: { reverse: true },
        }
        
    )
    
    const [open, setOpen] = useState(true);
    


    return (
        <div className={s.home__wrapper} id='homePage'>
            <div>
            <Transition
                items={showTitle}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={showTitle}
                delay={0}
                config={config.stiff}
                onRest={() => setShowTitle(true)}>
                {(styles, item) =>
                item && <animated.div style={styles}>

                    <div onClick={() => setOpen(state => !state)}>
                        <HomeText open={open}>
                            <span>I'M SOPHIA</span>

                            <span>A RUSSIAN FREELANCE PHOTOGRAPHER</span>

                            <span>I RELY ON THE HUMANISTIC KNOWLEDGE OF LIFE, IN THE CENTER OF WHICH IS THE ESSENCE OF MAN.</span>

                            <span>WHERE FORM AND CONTENT ARE INEXTRICABLY LINKED, AND THE HUMAN BODY IS A REFLECTION OF HIS INNER WORLD.</span>
                            
                            <span>IN OTHER WORDS, A SNAPSHOT CAPTURED IN AN INSTANT IS THE QUINTESSENCE OF THE CONSCIOUS AND UNCONSCIOUS.</span>

                        </HomeText>
                    </div>

                    <img className={s.home__title_img} src={img} alt="" />
                    <div>
                        <animated.div style={{ rotateZ }} className={s.view__works}>view</animated.div>
                        <AnimatedWorksHP />
                    </div>
                </animated.div>
                }
            </Transition>
            </div>
        </div>
    );
};

export default HomePage;