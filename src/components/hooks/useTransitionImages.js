import {
    useTransition,
} from '@react-spring/web';

export const useTransitionImages = (openImages, firstImgages, transApi) => {
    const transitionImages = useTransition(openImages ? firstImgages : [], {
        ref: transApi,
        config: {duration: 1200},
        reset: true,
        trail: 100 / firstImgages.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
      })
    return transitionImages;
}