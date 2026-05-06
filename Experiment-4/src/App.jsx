import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'
function App() {
 

  return (
    <>
      <div className="App">
      <h2>Student Information Dashboard</h2>
      
      {/* Passing different values using props */}
      <Student 
        name="Nikhil" 
        course="Computer Science" 
        marks="92" 
      />
      
      <Student 
        name="Affan" 
        course="Computer Science" 
        marks="85" 
      />
      
      <Student 
        name="Nishant" 
        course="Computer Science" 
        marks="78" 
      />
    </div>
    </>
  )
}

export default App
