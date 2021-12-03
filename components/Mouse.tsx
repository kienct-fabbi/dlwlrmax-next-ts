import React, { useEffect, useRef } from 'react';
import useMousePosition from '../hooks/useMousePosition';
import styles from '../styles/Common.module.scss';
import { MOUSE_POSITION } from '../util/Interfaces';
export default function Mouse(): JSX.Element {
  const mouseEle = useRef<HTMLDivElement | null>(null);
  // mouse variable
  const { x, y }: MOUSE_POSITION = useMousePosition();
  //handle mouse
  const mouseMove = (): void => {
    if (mouseEle && mouseEle.current) {
      mouseEle.current.style.transform = `translate3d(${x - 10}px,${y - 10}px,0)`;
    }
  };
  useEffect(() => {
    requestAnimationFrame(() => {
      mouseMove();
    });
  }, []);
  useEffect(() => {
    requestAnimationFrame(() => {
      mouseMove();
    });
  }, [x, y]);
  return (
    <>
      <div ref={mouseEle} className={styles.customMouse}></div>
    </>
  );
}
