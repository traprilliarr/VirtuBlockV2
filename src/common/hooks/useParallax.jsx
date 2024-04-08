import { useSpring, useTransform } from "framer-motion";
import { useMobile } from "./useMobile";

export const useParallax = (scrollY) => {
  const yy = useTransform(scrollY, [200, 700], [0, -200]);
  const yDownn = useTransform(scrollY, [200, 700], [0, 200]);
  const yDown = useSpring(yDownn, {
    duration: 2,
    damping: 30,
  });
  const y = useSpring(yy, {
    duration: 2,
    damping: 30,
  });
  return { y, yDown };
};

export const useTextParallax = (scrollY) => {
  const xx = useTransform(scrollY, [0, 500], [0, 200]);
  const xDownn = useTransform(scrollY, [0, 500], [0, -200]);
  const x = useSpring(xx, {
    duration: 2,
    damping: 30,
  });
  const xDown = useSpring(xDownn, {
    duration: 2,
    damping: 30,
  });
  return { x, xDown };
};

export const useImageParallax = (scrollY) => {
  const yy = useTransform(scrollY, [0, 400], [0, 780]);
  const xx = useTransform(scrollY, [0, 800], [0, -400]);
  const ww = useTransform(scrollY, [0, 800], [100, 400]);
  const roundd = useTransform(scrollY, [0, 800], [1000, 20]);

  const y = useSpring(yy, {
    duration: 2,
    damping: 30,
  });
  const x = useSpring(xx, {
    duration: 2,
    damping: 30,
  });
  const w = useSpring(ww, {
    duration: 2,
    damping: 30,
  });
  const round = useSpring(roundd, {
    duration: 2,
    damping: 30,
  });
  return { y, x, w, round };
};


export const useTestiParallax = (scrollY) => {
  const isMobile = useMobile();
  const xx = useTransform(scrollY, !isMobile ? [8400, 8800] : [14100, 17000], !isMobile ? [0, -400] : [200, -1700]);

  const x = useSpring(xx, {
    duration: 2,
    damping: 30,
  });
  return { x };
};