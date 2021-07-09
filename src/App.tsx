import React from 'react'
import './App.scss'
// import { Counter } from './view/home'
import { HomePage } from './view/HomePage'
import { Header } from './view/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  )
}

export default App
