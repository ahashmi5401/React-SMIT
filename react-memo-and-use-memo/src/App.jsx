import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)
    const kuchbi = useMemo(() => {
    let arr = []
for(let i = 0; i < 5; i++){
    arr.push(i)
  }
  return arr
  
  })

  //kuchbi ab fuction ni hai useMemo array save kar chuka hai ab print karo ge tou array print hoga unecessary redering ni hgi
  console.log(kuchbi);
  
  return (
    <>
    <Child />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
