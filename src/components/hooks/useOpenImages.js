import {
    useSpring,
    config,
} from '@react-spring/web';

export const useOpenImages = (openImages, springApi) => {
    const spring = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '20%' },
        to: { size: openImages ? '100%' : '20%' },
      })
      return spring;
}