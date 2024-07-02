import styles from '@/ui/title.module.css';
import Link from 'next/link';
import { ITitle } from '@/lib/types';

const Title: React.FC<ITitle> = ({ name, href }) => {

  return (
    <div>
      <Link href={{
        pathname: href,
        query: {
          name
        }
        }} className={styles.container}>
        <h2 className={styles.text}>
          {name.toLocaleUpperCase()}
        </h2>
      </Link>
      <p className={styles.subtitle}>Popular {name}</p>
    </div>
  )
}

export default Title;