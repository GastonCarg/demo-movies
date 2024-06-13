import { styles } from "./style";

export default function Title({type = 'Titles'}) {
  return (
    <>
      <section>
        <h3>Popular {type}</h3>
      </section>

      <style jsx>{styles}</style>
    </>
  )
}
