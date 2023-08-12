"use client";

import styles from './homePage.module.css'
import { styleConcat } from '@/utils';
import InfoSection from '@/components/LandingPage/InfoSection';

export default function Home() {
  return (
    <div className={styles.app} >
      <div className={styleConcat(styles.contentContainer, styles.header)}>

      </div>

      <div className={styleConcat(styles.contentContainer, styles.contentDisplay)}>
        <InfoSection />
      </div>
    </div>
  );
}
