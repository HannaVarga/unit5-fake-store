import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Homepage from './pages/Hompage/Homepage'
import Details from './pages/Hompage/Productdetails/Details'
import Footer from './components/Footer'
import Contactus from './pages/Hompage/Contactus/Contactus'



function App() {

  return (
    <div className='App'>

      <Header />
      <Homepage />
      <Details />
      <Footer />
      <Contactus />
     
      
    </div>
  )
}

export default App
