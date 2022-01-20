import React, { Children, useState } from 'react'
import { useTrail, a } from '@react-spring/web';
import s from '../pages/HomePage.module.css';

const HomeText = ({ children }) => {
  const [open, setOpen] = useState(true);
  const items = Children.toArray(children);
  
  const trail = useTrail(items.length, {
    config: { mass: 4, tension: 1000, friction: 1500 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 30,
    from: { opacity: 0, y: 30 },
    delay: 500,
  })
  
    return (
        <div>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className={s.home__text} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
    );
};

export default HomeText;