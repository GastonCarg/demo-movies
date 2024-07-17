import styles from '@/ui/socialMedia.module.css';
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <Link href={'https://www.facebook.com/'} className={styles.imgContainer}>
        <img alt='facebook' src='facebook-white.svg' className={styles.icon} />
      </Link>
      <Link href={'https://twitter.com/'} className={`${styles.imgContainer} ${styles.imgCenter}`}>
        <img alt='x' src='twitter-white.svg' className={styles.icon}></img>
      </Link>
      <Link href={'https://www.instagram.com/'} className={styles.imgContainer}>
        <img alt='instagram' src='instagram-white.svg' className={styles.icon}></img>
      </Link>
    </div>
  )
}

export default SocialMedia;