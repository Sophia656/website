import React, { useEffect, useRef, useState } from 'react';
import img from '../img/home_title.jpg';
import downArr from '../img/down_arrow.png';
import s from './HomePage.module.css';
import { Transition, easings } from 'react-spring';
import HomeText from '../components/HomeText';
import AnimatedWorksHP from '../components/AnimatedWorksHP';
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web';
import img1 from '../img/body_title.jpg';
import img2 from '../img/doc_title.jpg';
import FirstLeftPackage from '../HomeImages/FirstLeftPackage';
  
// import { data } from '../HomeImages/Test2.jsx';

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
        }
        
    )
    
    const [open, setOpen] = useState(true);

    //
    const imagesOne = [
      // <img className={s.item} src={require('../img/b1/b1_0.jpg')} />,
      <img className={s.item} src={require('../img/b1/b1_1.jpg')} />,
      <img className={s.item} src={require('../img/b1/b1_2.jpg')} />,
      <img className={s.item} src={require('../img/g1/g1_1.jpg')} />,
      <img className={s.item} src={require('../img/g1/g1_2.jpg')} />,
      <img className={s.item} src={require('../img/g1/g1_3.jpg')} />,
      <img className={s.item} src={require('../img/g3/g3_1.jpg')} />,
      <img className={s.item} src={require('../img/g3/g3_2.jpg')} />,
      <img className={s.item} src={require('../img/g3/g3_3.jpg')} />,
    ];
    const [openTest, setOpenTest] = useState(false);

    const stylesImg = [s.title__images];

    const springApi = useSpringRef();
    const { size, ...rest } = useSpring({
      ref: springApi,
      config: config.stiff,
      from: { size: '20%' },
      to: { size: openTest ? '100%' : '20%' },
    });
    const transApi = useSpringRef();

  const transition = useTransition(openTest ? imagesOne : [], {
    ref: transApi,
    trail: 2000 / imagesOne.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });
  useChain(openTest ? [springApi, transApi] : [transApi, springApi], [
    0,
    openTest ? 0.1 : 0.1,
  ]);

  useEffect(() => {
    if (openTest) {
      stylesImg.push(s.false)
    }
  }, [openTest]);

  //
  const [over, setOver] = useState(false);
  console.log(over)


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

                            <span>A RUSSIAN PHOTOGRAPHER</span>

                            <span>I RELY ON THE HUMANISTIC KNOWLEDGE OF LIFE, IN THE CENTER OF WHICH IS THE ESSENCE OF MAN.</span>

                            <span>WHERE FORM AND CONTENT ARE INEXTRICABLY LINKED, AND THE HUMAN BODY IS A REFLECTION OF HIS INNER WORLD.</span>
                            
                            <span>IN OTHER WORDS, <span style={{color: '#742727e5'}}>A SNAPSHOT CAPTURED IN AN INSTANT IS THE QUINTESSENCE OF THE CONSCIOUS AND UNCONSCIOUS</span>.</span>

                        </HomeText>
                    </div>

                    {/* <img className={s.home__title_img} src={img} alt="" /> */}
                    <div>
                        <animated.div style={{ rotateZ }} className={s.view__works}>view</animated.div>
                        <AnimatedWorksHP />
                    </div>
                </animated.div>
                }
            </Transition>
            </div>

            <div className={s.wrapper}>
            <animated.div
              style={{ ...rest, width: size, height: size }}
              
              onClick={() => setOpenTest(openTest => !openTest)}>
              {openTest
              ?
              <FirstLeftPackage transition={transition} />
              : <div onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)} className={s.img__wrapper}>
                  <img className={stylesImg.join(' ')} src={require('../img/b1/b1_0.jpg')} />
                  {over 
                  ? <img className={s.click} src={require('../img/only.gif')} />
                  : <h1></h1>
                  }
                </div>
              }
            </animated.div>
    </div>

        </div>
    );
};

export default HomePage;