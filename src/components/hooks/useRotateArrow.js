import { easings, useSpring } from "react-spring";

export const useRotateArrow = () => {
    const rotate = useSpring({
        from: {
            rotateZ: 0,
          },
          to: {
            rotateZ: 360,
          },
          config: {
            duration: 4000,
            easing: easings.easeInOutQuart,
          },
          loop: { reverse: true },
        }
    )
    return rotate;
}