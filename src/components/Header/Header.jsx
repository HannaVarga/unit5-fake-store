import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import './Header.css'
function Header(props) {
  const [count, updateCount] = React.useState(0)
  const handleIncrement = () => {
        updateCount(count+1) }
      const handleDecrement = () => {
        if (count > 0) {setCount(count-1); } }
      const handleClear = () => {
        updateCount(0) }


  return (
    <div className='header-container'>
     <a href="/" className="home-btn"> <h1>Fake Store</h1>{props.title}</a>
     <div className="shopping-cart">
     {count > 0 && <p className="shopping-cart-counter">{count}</p>}

       {/* placeholders. these will be used to test cart functionality */}
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
         <button onClick={handleClear}>Clear</button>

      <AiOutlineShoppingCart className="shopping-cart-icon"  />

    </div>
    </div>
  )
}

export default Header
