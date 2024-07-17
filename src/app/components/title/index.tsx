import { styles } from "./style";

export default function Title({ type = 'Titles' }) {
  return (
    <>
      <section>
        <h2>Popular {type}</h2>
      </section>

      <style jsx>{styles}</style>
    </>
  )
}
