import React from 'react'
import { AppIntro } from '../app-intro'
import './style.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Game App</h1>
      <AppIntro />
    </header>
  )
}

export default Header
