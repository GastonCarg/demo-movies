import Link from "next/link";
import { styles } from "./style";

const copyright = [
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
      <div>
        {
          copyright.map((cp, index) => {
            return (
              <>
                <Link id="link-styled" key={index} href={cp.path} className="link-styled">
                  <p>
                    {cp.title}
                  </p>
                </Link>
                <p className="separator">|</p>
              </>
            )
          })
        }
      </div>

      <style jsx>{styles}</style>
    </>
  )
}
