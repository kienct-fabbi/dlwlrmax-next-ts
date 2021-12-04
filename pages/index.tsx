import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import ItemJewelry from '../components/ItemJewelry';
import PageLayout from '../layouts/PageLayout';
import Link from 'next/link';
import Nav from '../components/Nav';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className={styles.home}>
        <Head>
          <title>Dlwlrmax - Complement your flawless beauty</title>
          <meta name="description" content="Complement your flawless beauty" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Nav />
          <section className={styles.clothes}>
            <div className={styles.lImage}>
              <Link href="/clothes">
                <a className={styles.title}>Clothes</a>
              </Link>
              <div className={styles.image}>
                <div className={styles.illuTitle}>Clothes</div>
              </div>
            </div>
            <div className={styles.rImage}>
              <a href="/" className={styles.title}>
                IU x NEW BALANCE
              </a>
              <div className={styles.image}>
                <img src="../img/1.jpg" alt="" />
              </div>
            </div>
          </section>
          <section className={styles.jewelry}>
            <div className={styles.lContent}>
              <a href="/" className={styles.title}>
                Jewelry
              </a>
              <div className={styles.image} />
            </div>
            <div className={styles.rContent}>
              <ItemJewelry img={'../img/j1.png'} name="MARIEBEL Necklace" />
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
};

export default Home;
