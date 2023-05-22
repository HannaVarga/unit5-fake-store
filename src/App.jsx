// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContactUs from './pages/ContactUs/ContactUs';
import ProductCard from './components/ProductCard/ProductCard'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import ThemeContextProvider from './context/Themecontext'
import CartContextProvider from './context/Cartcontext'






function App() {
const storeName = "Fake Store"
  return (
    <div className='App'>
<BrowserRouter>
<ThemeContextProvider>
 <CartContextProvider>
   <Header username={storeName} />

  <Routes>
   <Route path='/' element={<HomePage />}/>
    <Route path='/contactus' element={<ContactUs />}/>
    <Route path='/productdetails/:id' element={<ProductDetails />}/>
    <Route path='/productcard/:id' element={<ProductCard />} />
   </Routes>

   <Footer />
   </CartContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
