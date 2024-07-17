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
                onError={(e) => {
                  // Esto estara bien? vaya usted a saber
                  const { target } = e;
                  if (target) (target as HTMLImageElement).style.display = 'none'
                }}
              />
            </Link>
          </>
      }
      <p className={styles.subtitle}>{name ? `Popular ${name}` : `${program?.title}`}</p>
    </div>
  )
}

export default Title;