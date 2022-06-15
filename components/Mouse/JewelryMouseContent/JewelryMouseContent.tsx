import React from 'react';
import styles from '../../../styles/Mouse.module.scss';
type PROPS = {
  mouseState: {
    state: string;
  };
};
export default function JewelryMouseContent({ mouseState }: PROPS): JSX.Element {
  return (
    <div
      className={styles.jewelrySlide}
      style={{ display: mouseState.state != 'jewelryTitleHover' ? 'none' : '' }}
    >
      <img src={'../../../img/UI.jpg'} alt="s" />
    </div>
  );
}
