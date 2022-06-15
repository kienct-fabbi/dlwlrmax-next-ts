import Link from 'next/dist/client/link';
import React from 'react';
import styles from '../../styles/Home.module.scss';
import ItemJewelry from '../ItemJewelry';
type PROPS = {
  handleHoverJewelry: (e: React.MouseEvent) => void;
  handleLeaveJewelry: () => void;
};
export default function JewelrySection({
  handleHoverJewelry,
  handleLeaveJewelry
}: PROPS): JSX.Element {
  return (
    <section className={styles.jewelry}>
      <div className={styles.lContent}>
        <Link href="#">
          <a
            className={styles.title}
            onMouseEnter={handleHoverJewelry}
            onMouseLeave={handleLeaveJewelry}
          >
            Jewelry
          </a>
        </Link>
        <div className={styles.image} />
      </div>
      <div className={styles.rContent}>
        <ItemJewelry img={'../img/j1.png'} name="MARIEBEL Necklace" />
      </div>
    </section>
  );
}
