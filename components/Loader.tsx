import React from 'react';
import styles from '../styles/Loader.module.scss';
export default function Loader(): JSX.Element {
  return (
    <div className={styles.Loader}>
      <div className={styles.loaderText}>Loading</div>
    </div>
  );
}
