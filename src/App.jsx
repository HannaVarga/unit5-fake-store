import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContactUs from './pages/ContactUs/ContactUs';
// import ProductCard from './components/ProductCard/ProductCard'
// import ProductDetails from './pages/ProductDetails/ProductDetails'







function App() {

  return (
    <div className='App'>
<BrowserRouter>
   <Header />

  <Routes>
   <Route path='/' element={<HomePage />}/>
    <Route path='/contactus' element={<ContactUs />}/>
   </Routes>

   <Footer />
 </BrowserRouter>
    </div>
  )
}

export default App


// //   return (
//   <BrowserRouter>
//   <Header username={storeName} />

//   <Routes>
//     <Route path='/' element={<HomePage />}/>
//     <Route path='/details/:productId' element={<ProductDetail />}/>
//     <Route path='/contactus' element={<ContactUs />}/>
//   </Routes>

//   <Footer />
// </BrowserRouter>
// )
// // }