import { easings, useSpring } from "react-spring";

export const useRotateImg = () => {
    const styles = useSpring({
        loop: { reverse: true },
        config: {
            duration: 2000,
            easing: easings.easeInOutQuart,
          },
        from: { rotateX: -2, rotateZ: -2 },
        to: { rotateX: 2, rotateZ: 2},
      })
      return styles;
}