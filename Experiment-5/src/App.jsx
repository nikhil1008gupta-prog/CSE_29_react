import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
const [count, setCount] = useState(0);
  return (
    <>
      <div className="app-container">
      <div className="counter-card">
        <h2>React Counter<br />Application</h2>
        
        {/* Display the current counter value */}
        <h1 className="count-display">{count}</h1>
        
        <div className="button-row">
          {/* Update state using event handlers */}
          <button onClick={() => setCount(count + 1)}>Increment (+)</button>
          <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        </div>
        
        <div className="reset-row">
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
