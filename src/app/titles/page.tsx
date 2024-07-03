import styles from '@/ui/titles.module.css';
import Title from './title/page';

const streamingTypes = [
  {
    name: 'Movies',
    href: '/program'
  },
  {
    name: 'Series',
    href: '/program'
  },
]

export default function TitlesList() {
  return (
    <div className={styles.container}>
      {
        streamingTypes.map((str, idx) => {
          const { name, href } = str;
          return (
            <Title key={idx} name={name} href={href} type='title' />
          )
        })
      }
    </div>
  )
}