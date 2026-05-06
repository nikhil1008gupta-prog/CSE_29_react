import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // 1. Define your variables here
  const username = "Nikhil"; 
  const isLoggedIn = true; 

  return (
    <>
      <h1 className="profile-title">profile</h1>
      <p>User: {username.toUpperCase()}</p>
      
      {/* 2. Wrap the conditional logic in curly braces */}
      {isLoggedIn ? <p>Welcome back, {username}!</p> : <p>Please log in.</p>}
    </>
  )
}

export default App
