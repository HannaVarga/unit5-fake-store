import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Homepage from './pages/Hompage/Homepage'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>

      <Header />
      <Homepage />
      <Footer />
     
      
    </div>
  )
}

export default App
