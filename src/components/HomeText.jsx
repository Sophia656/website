import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web';
import s from '../pages/HomePage.module.css';

const HomeText = ({ open, children }) => {
    const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 3, tension: 3000, friction: 2500 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 30,
    height: open ? 250 : 0,
    from: { opacity: 0, y: 30, height: 20 },
    delay: 700,
  })
  
    return (
        <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={s.home__text} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
    );
};

export default HomeText;