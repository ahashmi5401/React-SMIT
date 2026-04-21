import { useState , useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)

  //ab parent compenent render hota hai tou child bhi render hota hai mgr use rokhta hain memo se but jab function as prop jaraha
  //ho tou child phr bhi render hoga tu phr memo ki jaga useCallback use karte hai bcz jab componenet render hota hai tou 
  //function phr se banta hai tou new prop ki tarah treat kiya jata hai tbhi usse child render hojata hai 
  //useCallback function ko memoize kardeta hai or same result show karta hai 

  const handleClick = useCallback(() => {
    console.log("click howaa ===>")
  },[])

  return (
    <>
    <Child handleClick={handleClick}/>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
