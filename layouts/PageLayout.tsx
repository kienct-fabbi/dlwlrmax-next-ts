import React, { useRef } from 'react';
import { useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';
import useWindowSize from '../hooks/useWindowsSize';
import styles from '../styles/Common.module.scss';
import { MOUSE_POSITION, SCROLL_CONFIG } from '../util/Interfaces';

type Props = {
  children: JSX.Element;
};

export default function PageLayout({ children }: Props): JSX.Element {
  //scroll variable
  const size = useWindowSize();
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const scrollConfig: SCROLL_CONFIG = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };
  // mouse variable
  const { x, y }: MOUSE_POSITION = useMousePosition();
  const mouseEle = useRef<HTMLDivElement | null>(null);
  //handle mouse
  const mouseMove = (): void => {
    if (mouseEle && mouseEle.current) {
      mouseEle.current.style.transform = `translate3d(${x}px,${y}px,0)`;
    }
  };
  //handle scrolling
  const scrolling = (): void => {
    if (scrollContainer && scrollContainer.current) {
      scrollConfig.current = window.scrollY;
      scrollConfig.previous += (scrollConfig.current - scrollConfig.previous) * scrollConfig.ease;
      scrollConfig.rounded = Math.round(scrollConfig.previous * 100) / 100;
      //style for scroll
      scrollContainer.current.style.transform = `translate3d(0,-${scrollConfig.rounded}px,0)`;
      requestAnimationFrame(() => scrolling());
    }
  };

  useEffect(() => {
    document.body.style.height = scrollContainer.current?.getBoundingClientRect().height + 'px';
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => scrolling());
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      mouseMove();
    });
  }, [x, y]);

  return (
    <div className={styles.App}>
      <div ref={mouseEle} className={styles.customMouse}></div>
      <div ref={scrollContainer} className={styles.scroll}>
        {children}
      </div>
    </div>
  );
}
