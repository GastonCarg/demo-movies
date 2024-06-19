import { styles } from './style';

export default function Header() {
  return (
    <>
      <header>
        <h2>DEMO Streaming</h2>
        <div>
          <button id='login'>
            <h3>Log in</h3>
          </button>
          <button id='free-trial'>
            <h3>
              Start you free trial
            </h3>
          </button>
        </div>
      </header>

      <style jsx>{styles}</style>
    </>
  )
}
