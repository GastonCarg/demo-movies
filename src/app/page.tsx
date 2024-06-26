'use client';

import { Title, Titles } from './index';
import styles from '../ui/home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Title />
        <Titles />
      </main>
    </>
  );
}
