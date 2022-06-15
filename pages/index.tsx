import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import PageLayout from '../layouts/PageLayout';
import Nav from '../components/Nav';
import { useDispatch } from 'react-redux';
import { change } from '../redux/features/mouseStates';
import ClothesSection from '../components/Home/ClothesSection';
import JewelrySection from '../components/Home/JewelrySection';
import { motion } from 'framer-motion';
const Home: NextPage = () => {
  const dispatch = useDispatch();
  const handleHoverClothes = (e: React.MouseEvent) => {
    const $element = e.currentTarget as HTMLDivElement;
    const top = $element.getBoundingClientRect().top;
    const left = $element.getBoundingClientRect().left;
    const height = $element.offsetHeight;
    const width = $element.offsetWidth;
    const NEW_POSITION = {
      y: top + height / 2 - 25 + window.scrollY,
      x: left + width + 20
    };
    dispatch(
      change({ state: 'clothesTitleHover', style: 'clothesTitleHover', position: NEW_POSITION })
    );
  };
  const handleLeaveClothes = () => {
    dispatch(change({ state: 'normal', style: 'normal' }));
  };
  const handleHoverJewelry = (e: React.MouseEvent) => {
    const $element = e.currentTarget as HTMLDivElement;
    const top = $element.getBoundingClientRect().top;
    const left = $element.getBoundingClientRect().left;
    const height = $element.offsetHeight;
    const width = $element.offsetWidth;
    const NEW_POSITION = {
      y: top + height / 2 - 25 + window.scrollY,
      x: left + width + 20
    };
    dispatch(
      change({ state: 'jewelryTitleHover', style: 'jewelryTitleHover', position: NEW_POSITION })
    );
  };
  const handleLeaveJewelry = () => {
    dispatch(change({ state: 'normal', style: 'normal' }));
  };
  return (
    <PageLayout>
      <motion.div exit={{ opacity: 0 }} className={styles.home}>
        <Head>
          <title>Dlwlrmax - Complement your flawless beauty</title>
          <meta name="description" content="Complement your flawless beauty" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Nav />
          <ClothesSection
            handleLeaveClothes={handleLeaveClothes}
            handleHoverClothes={handleHoverClothes}
          />
          <JewelrySection
            handleHoverJewelry={handleHoverJewelry}
            handleLeaveJewelry={handleLeaveJewelry}
          />
        </main>
      </motion.div>
    </PageLayout>
  );
};

export default Home;
