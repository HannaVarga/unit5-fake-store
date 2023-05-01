import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hompage from './pages/Hompage'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>

      <Header />
      <Hompage />
      <Footer />
     
      
    </div>
  )
}

export default App
