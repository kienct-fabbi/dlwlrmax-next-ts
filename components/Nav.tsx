import React from 'react';
import styles from '../styles/Nav.module.scss';
import { change } from '../redux/features/mouseStates';
import { motion } from 'framer-motion';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
const NAV_TEXT = [
  {
    link: '#',
    text: 'Dlwlrma'
  },
  {
    link: '#',
    text: 'Clothes'
  },
  {
    link: '#',
    text: 'Jewelry'
  },
  {
    link: '#',
    text: 'About us'
  }
];
const imageContainer = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5
    }
  }
};
const imageAnimation = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    type: 'spring',
    duration: 1
  }
};
export default function Nav(): JSX.Element {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStateOrAny) => state.loadingState);
  const handleMouseOut = () => {
    dispatch(change({ state: 'normal', style: 'normal' }));
  };
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
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          <motion.div
            variants={imageContainer}
            initial={isLoading && 'initial'}
            animate={isLoading && 'animate'}>
            <motion.img
              variants={imageAnimation}
              initial="initial"
              animate="animate"
              src="../img/1.jpeg"
              alt="image"
            />
            <motion.img
              variants={imageAnimation}
              initial="initial"
              animate="animate"
              src="../img/4.jpg"
              alt="image"
            />
            <motion.img
              variants={imageAnimation}
              initial="initial"
              animate="animate"
              src="../img/7.jpg"
              alt="image"
            />
          </motion.div>
          <div>
            <img src="../img/2.jpeg" alt="image" />
            <img src="../img/5.jpg" alt="image" />
            <img src="../img/E9I3Uk9VgAQDXzx.jpg" alt="image" />
          </div>
        </div>
        <div className={styles.navText}>
          {NAV_TEXT.map((item, index) => {
            return (
              <a
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                onMouseLeave={handleMouseOut}
                style={{ transform: `translateX(${index * 20}px)` }}
                href={item.link}
                key={index}>
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
