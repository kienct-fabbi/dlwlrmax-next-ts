import React, { useEffect, useRef } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import styles from '../../styles/Mouse.module.scss';
import { MOUSE_POSITION } from '../../util/Interfaces';
import { useSelector, RootStateOrAny } from 'react-redux';
import NavMouseContent from './NavMouseContent/NavMouseContent';
import ClothesMouseContent from './ClothesMouseContent/ClothesMouseContent';
import JewelryMouseContent from './JewelryMouseContent/JewelryMouseContent';

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
        case 'linkHover':
          mouseEle.current.style.transform = `translate3d(${mouseState.position.x}px,${mouseState.position.y}px,0)`;
          break;
        case 'clothesTitleHover':
          mouseEle.current.style.transform = `translate3d(${mouseState.position.x - 70}px,${
            mouseState.position.y - 70
          }px,0)`;
          break;
        case 'jewelryTitleHover':
          mouseEle.current.style.transform = `translate3d(${mouseState.position.x - 70}px,${
            mouseState.position.y - 70
          }px,0)`;
          break;
        default:
          mouseEle.current.style.transform = `translate3d(${x + 5}px,${y + 25}px,0)`;
          break;
      }
    }
  };
  return (
    <>
      <div
        ref={mouseEle}
        className={`${styles.customMouse} ${
          styles[mouseState.state] ? styles[mouseState.state] : ''
        }`}
      >
        <NavMouseContent mouseState={mouseState} />
        <ClothesMouseContent mouseState={mouseState} />
        <JewelryMouseContent mouseState={mouseState} />
      </div>
    </>
  );
}
