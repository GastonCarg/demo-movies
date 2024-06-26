import styles from '@/ui/titles.module.css';
import Title from './title/page';

export default function TitlesList() {
  return (
    <div className={styles.container}>
      <Title name="Movies" />
      <Title name="Series" />
    </div>
  )
}