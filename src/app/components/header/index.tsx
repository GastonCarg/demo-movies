import { styles } from './style';

export default function Header() {
  return (
    <>
      <header>
        <h1>DEMO Streaming</h1>
        <div>
          <button id='login'>Log in</button>
          <button id='free-trial'>Start you free trial</button>
        </div>
      </header>

      <style jsx>{styles}</style>
    </>
  )
}
