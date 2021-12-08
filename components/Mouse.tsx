import React, { useEffect, useRef } from 'react';
import useMousePosition from '../hooks/useMousePosition';
import styles from '../styles/Mouse.module.scss';
import { MOUSE_POSITION } from '../util/Interfaces';
import { useSelector, RootStateOrAny } from 'react-redux';
import HomeIcon from './iconComponent/HomeIcon';
import { AnimatePresence, motion } from 'framer-motion';
import ClothesIcon from './iconComponent/ClothesIcon';
import JewelryIcon from './iconComponent/JewelryIcon';
import AboutIcon from './iconComponent/AboutIcon';

//animation variant
const nav_animation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { type: 'spring', duration: 0.6 }
};
export default function Mouse(): JSX.Element {
  const mouseState = useSelector((state: RootStateOrAny) => state.mouseState);
  const mouseEle = useRef<HTMLDivElement | null>(null);
  // mouse variable
  const { x, y }: MOUSE_POSITION = useMousePosition();

  useEffect(() => {
    requestAnimationFrame(() => {
      handleMouseEvent();
    });
  }, []);
  useEffect(() => {
    requestAnimationFrame(() => {
      handleMouseEvent();
    });
  }, [x, y]);

  const handleMouseEvent = () => {
    if (mouseEle && mouseEle.current) {
      switch (mouseState.state) {
        case 'navHover':
          mouseEle.current.style.transform = `translate3d(${mouseState.position.x}px,${mouseState.position.y}px,0)`;
          break;
        case 'linkHover':
          mouseEle.current.style.transform = `translate3d(${mouseState.position.x}px,${mouseState.position.y}px,0)`;
          break;
        default:
          mouseEle.current.style.transform = `translate3d(${x - 10}px,${y - 10}px,0)`;
          break;
      }
    }
  };
  return (
    <>
      <div ref={mouseEle} className={`${styles.customMouse} ${styles[mouseState.state]}`}>
        <AnimatePresence>
          {mouseState.style === 'Dlwlrma' && (
            <motion.div
              variants={nav_animation}
              initial="initial"
              animate="animate"
              transition={{ type: 'spring', duration: 0.6 }}
            >
              <HomeIcon />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {mouseState.style === 'Clothes' && (
            <motion.div
              variants={nav_animation}
              initial="initial"
              animate="animate"
              transition={{ type: 'spring', duration: 0.6 }}
            >
              <ClothesIcon />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {mouseState.style === 'Jewelry' && (
            <motion.div
              variants={nav_animation}
              initial="initial"
              animate="animate"
              transition={{ type: 'spring', duration: 0.6 }}
            >
              <JewelryIcon />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mouseState.style === 'About us' && (
            <motion.div
              variants={nav_animation}
              initial="initial"
              animate="animate"
              transition={{ type: 'spring', duration: 0.6 }}
            >
              <AboutIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
