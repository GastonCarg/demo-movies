import Link from "next/link";
import styles from '@/ui/copyright.module.css';

const options = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Terms and Conditions',
    path: '/'
  },
  {
    title: 'Privacy Policy',
    path: '/'
  },
  {
    title: 'Collection Statement',
    path: '/'
  },
  {
    title: 'Help',
    path: '/'
  },
  {
    title: 'Manage Account',
    path: '/'
  },
];

export default function Copyright() {
  return (
    <>
      <div className={styles.div}>
        {
          options.map((cp, index) => {
            return (
              <>
                <Link key={index} href={cp.path} className={styles.linkStyled}>
                  <p className={styles.p}>
                    {cp.title}
                  </p>
                </Link>
                <p className={`${styles.separator} ${styles.p}`}>|</p >
              </>
            )
          })
        }
      </div >
    </>
  )
}