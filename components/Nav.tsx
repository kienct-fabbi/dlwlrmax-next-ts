import React from 'react';
import styles from '../styles/Nav.module.scss';
import { change } from '../redux/features/mouseStates';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
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
              <a
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                onMouseLeave={handleMouseOut}
                style={{ transform: `translateX(${index * 20}px)` }}
                href={item.link}
                key={index}
              >
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
