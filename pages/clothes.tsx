import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Clothes.module.scss';
import PageLayout from '../layouts/PageLayout';
import ItemClothes from '../components/ItemClothes';
const Clothes: NextPage = () => {
  return (
    <PageLayout>
      <div className={styles.clothes}>
        <Head>
          <title>Dlwlrmax - Complement your flawless beauty</title>
          <meta name="description" content="Complement your flawless beauty" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section className={styles.showcase}>
            <ItemClothes />
            <ItemClothes />
          </section>
        </main>
      </div>
    </PageLayout>
  );
};

export default Clothes;
