'use client'

import styles from '@/ui/header.module.css';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter()

  return (
    <>
      <header className={styles.header}>
        <button onClick={() => router.push('/')} className={`${styles.login} ${styles.home}`}>
          <h2 className={styles.h2}>DEMO Streaming</h2>
        </button>
        <div className={styles.div}>
          <button className={styles.login}>
            <h3 className={styles.h3}>Log in</h3>
          </button>
          <button className={styles.freeTrial}>
            <h3 className={styles.h3}>
              Start you free trial
            </h3>
          </button>
        </div>
      </header>
    </>
  )
}
