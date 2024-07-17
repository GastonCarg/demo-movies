import SocialMedia from './socialMedia';
import styles from '@/ui/icons.module.css';

const Icons = () => {
  return (
    <>
      <div className={styles.container}>
        <section id='socialMedia' className={styles.socialMedia}>
          <SocialMedia />
        </section>

        <section id='mobileDownload'>Iconos descarga</section>
      </div>
    </>
  )
}

export default Icons;