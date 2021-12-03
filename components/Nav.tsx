import React from 'react';
import styles from '../styles/Nav.module.scss';
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
export default function Nav(): JSX.Element {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          <div>
            <img src="../img/1.jpeg" alt="image" />
            <img src="../img/4.jpg" alt="image" />
            <img src="../img/7.jpg" alt="image" />
          </div>
          <div>
            <img src="../img/2.jpeg" alt="image" />
            <img src="../img/5.jpg" alt="image" />
            <img src="../img/E9I3Uk9VgAQDXzx.jpg" alt="image" />
          </div>
        </div>
        <div className={styles.navText}>
          {NAV_TEXT.map((item, index) => {
            return (
              <a style={{ transform: `translateX(${index * 20}px)` }} href={item.link} key={index}>
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
