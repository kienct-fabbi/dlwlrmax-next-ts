import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.scss';
import { change } from '../redux/features/mouseStates';
import { motion } from 'framer-motion';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  imageAnimation,
  imageAnimationReverse,
  NAV_TEXT,
  imageContainer,
  navTextContainer,
  navTextAnimation
} from '../util/variants/Nav';
export default function Nav(): JSX.Element {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStateOrAny) => state.loadingState.isLoading);
  const [loading, setLoading] = useState<boolean>(true);
  const handleMouseOut = () => {
    dispatch(change({ state: 'normal', style: 'normal' }));
  };
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  const handleMouseEnter = (e: React.MouseEvent) => {
    const ele = e.currentTarget;
    const width = (ele as HTMLDivElement).offsetWidth;
    const height = (ele as HTMLDivElement).offsetHeight;
    const offTop = (ele as HTMLDivElement).getBoundingClientRect().top;
    const offLeft = (ele as HTMLDivElement).getBoundingClientRect().left;
    // const translateX = (ele as HTMLDivElement).style.transform.replace(/([a-z])\w+[()]/g, '');
    const newPosition = {
      y: offTop + height / 2 - 25,
      x: offLeft + width + 20
    };
    const elementName = e.currentTarget.textContent;
    dispatch(change({ state: 'navHover', position: newPosition, style: elementName }));
  };
  const handleHoverImage = (e: React.MouseEvent) => {
    const $element = e.currentTarget as HTMLDivElement;
    const top = $element.getBoundingClientRect().top;
    const left = $element.getBoundingClientRect().left;
    const width = $element.offsetWidth;
    const height = $element.offsetHeight;
    $element.style.position = 'relative';
    $element.style.zIndex = '99';
    dispatch(
      change({
        state: 'imageHover',
        style: 'coverImage',
        size: { width: width, height: height },
        position: { x: left, y: top }
      })
    );
  };
  const handleLeaveHoverImage = (e: React.MouseEvent) => {
    const $element = e.currentTarget as HTMLDivElement;
    $element.style.zIndex = '0';
    dispatch(change({ state: 'normal', style: 'normal', size: { width: 35, height: 35 } }));
  };
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          <motion.div
            variants={imageContainer}
            custom={0.3}
            initial="initial"
            animate={!loading && 'animate'}>
            <motion.img
              onMouseOver={handleHoverImage}
              onMouseLeave={handleLeaveHoverImage}
              variants={imageAnimation}
              src="../img/1.jpeg"
              alt="image"
            />
            <motion.img variants={imageAnimation} src="../img/4.jpg" alt="image" />
            <motion.img variants={imageAnimation} src="../img/7.jpg" alt="image" />
          </motion.div>
          <motion.div
            custom={0.6}
            variants={imageContainer}
            initial="initial"
            animate={!loading && 'animate'}>
            <motion.img
              variants={imageAnimationReverse}
              src="../img/E9I3Uk9VgAQDXzx.jpg"
              alt="image"
            />
            <motion.img variants={imageAnimationReverse} src="../img/5.jpg" alt="image" />
            <motion.img variants={imageAnimationReverse} src="../img/2.jpeg" alt="image" />
          </motion.div>
        </div>
        <motion.div
          variants={navTextContainer}
          initial="initial"
          animate={!loading && 'animate'}
          className={styles.navText}>
          {NAV_TEXT.map((item, index) => {
            return (
              <motion.a
                custom={index}
                variants={navTextAnimation}
                onMouseOver={(e) => {
                  handleMouseEnter(e);
                }}
                onMouseLeave={handleMouseOut}
                href={item.link}
                key={index}>
                {item.text}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
