import SocialMedia from './socialMedia';
import Stores from './stores';
import styles from '@/ui/icons.module.css';

const Icons = () => {
  return (
    <>
      <div className={styles.container}>
        <section id='socialMedia' className={styles.socialMedia}>
          <SocialMedia />
        </section>

        <section id='stores'>
          <Stores />
        </section>
      </div>
    </>
  )
}

export default Icons;