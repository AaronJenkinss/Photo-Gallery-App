"use client";

import Image from 'next/image'
import styles from './app.module.css'
import Navbar from '@/components/Navigation/navbar';

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
    </div>
  );
}
