import React from 'react';
import styles from '../../../styles/Mouse.module.scss';
type PROPS = {
  mouseState: {
    state: string;
  };
};
export default function ClothesMouseContent({ mouseState }: PROPS): JSX.Element {
  return (
    <div
      className={styles.clothesSlide}
      style={{ display: mouseState.state != 'clothesTitleHover' ? 'none' : '' }}
    >
      <img src={'../../../img/2.jpg'} alt="s" />
    </div>
  );
}
