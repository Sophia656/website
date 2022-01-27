import React, { useEffect, useRef, useState } from 'react';
import s from './HomePage.module.css';
import { useSpring, config, animated, Transition, easings, useSpringRef } from 'react-spring';
import HomeText from '../components/HomeText';
import AnimatedWorksHP from '../components/AnimatedWorksHP';
import { Link } from 'react-scroll';
import FirstPage from '../HomeContent/FirstPage';
import SecondPage from '../HomeContent/SecondPage';
import ThirdPage from '../HomeContent/ThirdPage';
  

const HomePage = () => {
    const [showTitle, setShowTitle] = useState(false);
    const {rotateX, rotateZ, opacity} = useSpring({
      from: {
        rotateX: 180,
        rotateZ: 180,
        opacity: 0,
      },
      to: {
        rotateX: 360,
        rotateZ: 360,
        opacity: 1,
      },
      config: {
        duration: 4000,
        easing: easings.easeInOutQuart,
      },
      delay: 800,
    });


    return (
        <div className={s.home__wrapper} id='homePage'>
            <div className={s.home_title__wrapper}>
              <Transition
                items={showTitle}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={showTitle}
                config={config.stiff}
                onRest={() => setShowTitle(true)}>
                {(styles, item) =>
                item && 
                  <animated.div style={styles}>
                    <HomeText>
                        <span>I'M SOPHIA</span>
                        <span>PREDOMINANTLY A HUMANISTIC<br/>PHOTOGRAPHER</span>
                    </HomeText>
                    <Link
                    activeClass="active"
                    to="homePage1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                      <animated.div className={s.home_title__btn_wrapper}>
                        <animated.div style={{ rotateX, rotateZ, opacity }}>view</animated.div>
                        <AnimatedWorksHP />
                      </animated.div>
                    </Link>
                  </animated.div>
                }
              </Transition>
            </div>
            <FirstPage />
            <SecondPage />
            <ThirdPage />
        </div>
    );
};

export default HomePage;