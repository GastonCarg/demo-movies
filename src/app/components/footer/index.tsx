import { styles } from "./style";
import { LinksHelper } from '@/app/index';
import Icons from "../icons";

export default function Footer() {
  const dateNow = new Date();
  return (
    <>
      <footer>
        <LinksHelper />
        <section id='copyright'>
          <h5>Copyright © {dateNow.getFullYear()} DEMO Streaming. All Rights Reserved</h5>
        </section>
        <Icons />
      </footer>

      <style jsx>{styles}</style>
    </>
  )
}

