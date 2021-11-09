import React from 'react';
import styles from '../styles/ClothesItem.module.scss';
export default function ItemClothes(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="../img/2.jpg" alt="img" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>Product name</div>
        <div className={styles.rating}>🌟🌟🌟🌟🌟</div>
        <div className={styles.price}>23222</div>
      </div>
    </div>
  );
}
