import styles from '@/ui/title.module.css';
import Link from 'next/link';
interface ITitle {
  name: string;
}

const Title: React.FC<ITitle> = ({ name }) => {
  const goTo = () => {
    console.log('go to')
  }

  return (
    <Link href={'/'} className={styles.container}>
      <h2 className={styles.text}>
        {name}
      </h2>
    </Link>
  )
}

export default Title;