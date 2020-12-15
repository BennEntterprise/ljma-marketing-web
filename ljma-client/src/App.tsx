import React from 'react'
import logo from './logo.svg'
import './App.css'
import MyComponent from './MyComp'
import Awesome from './Awesome'
const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Laura Jean Music Academy</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <MyComponent />
        <Awesome />
      </header>
    </div>
  )
}

export default App
