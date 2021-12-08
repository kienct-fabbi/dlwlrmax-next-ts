import React from 'react';
import styles from '../styles/Loader.module.scss';
type props = {
  isLoading: boolean;
};
export default function Loader({ isLoading }: props): JSX.Element {
  return (
    <div className={styles.Loader} style={{ display: isLoading ? 'flex' : 'none' }}>
      <div className={styles.loaderText}>D</div>
      <div className={styles.loaderText}>L</div>
      <div className={styles.loaderText}>W</div>
      <div className={styles.loaderText}>L</div>
      <div className={styles.loaderText}>R</div>
      <div className={styles.loaderText}>M</div>
      <div className={styles.loaderText}>A</div>
    </div>
  );
}
