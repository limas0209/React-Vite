import { useState } from 'react'
import reactLogo from './assets/Alex pernilongo.jfif'
import viteLogo from './assets/SnoppBuzz.jfif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Henrique Lima</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <p>
          BE LIKE SHUI
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
