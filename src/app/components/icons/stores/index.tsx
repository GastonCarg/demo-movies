import styles from '@/ui/mobileDownload.module.css';
import Link from 'next/link';

const Stores = () => {
  return (
    <div className={styles.container}>
      <Link href={'https://www.apple.com/es/store'}>
        <img alt='apple store' src='app-store.svg'></img>
      </Link>
      <Link href={'https://play.google.com/'}>
        <img alt='play store' src='play-store.svg'></img>
      </Link>
      <Link href={'https://www.microsoft.com/es-ad/store/b/home'}>
        <img alt='window store' src='windows-store.svg' className={styles.imgStore}></img>
      </Link>
    </div>
  )
}

export default Stores;