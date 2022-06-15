import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Clothes.module.scss';
import PageLayout from '../layouts/PageLayout';
import { motion } from 'framer-motion';
import Link from 'next/dist/client/link';
const Clothes: NextPage = () => {
  return (
    <PageLayout>
      <motion.div exit={{ opacity: 0 }} className={styles.clothes}>
        <Head>
          <title>Dlwlrmax - Complement your flawless beauty</title>
          <meta name="description" content="Complement your flawless beauty" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section className={styles.showcase}>
            <Link href="/">Back</Link>
          </section>
        </main>
      </motion.div>
    </PageLayout>
  );
};

export default Clothes;
