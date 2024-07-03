import styles from '@/ui/title.module.css';
import Link from 'next/link';
import { ITitle } from '@/lib/types';

const Title: React.FC<ITitle> = ({ name, href, type, program }) => {

  return (
    <div>
      {
        type === 'title' ?
          <>
            <Link href={{
              pathname: href,
              query: {
                name
              }
            }} className={styles.container}>
              {/* <img>background con el icono png</img> */}
              <h2 className={styles.text}>
                {name?.toLocaleUpperCase()}
              </h2>
            </Link>
          </>
          :
          <>
            <Link href={{
              pathname: href ? href : '/',
            }} className={styles.container}>
              <img
                src={program?.images.posterArt.url}
                alt={program?.title}
                className={styles.images}
                // onLoad={(e) => e.target.style.display = 'block'}
                // onError={(e) => e.target.style.display = 'none'}
              />
            </Link>
          </>
      }
      <p className={styles.subtitle}>{name ? `Popular ${name}` : `Popular ${program?.title}`}</p>
    </div>
  )
}

export default Title;