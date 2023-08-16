"use client";

import styles from './homePage.module.css'
import { styleConcat } from '@/utils';
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';

export default function Home() {
  return (
    <div className={styles.main_container}>
      <ImageCarousel />
    </div>
  );
}
