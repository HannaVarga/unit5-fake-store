import React, { useEffect} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ThemeContext } from '../../context/ThemeContext'

function Homepage() {
  //  Global state
   const {darkMode, setDarkMode} = useContext(ThemeContext)


 const [categories,setCategories]= React.useState([])
 const [products, setProducts]= React.useState([])
  useEffect(
    ()=>{
      console.log('loaded')
      // Call API to get categories 
      axios.get(`https://fakestoreapi.com/products/categories`)
      .then(res =>{
        console.log(res.data)
        //store this data in state 
        setCategories(res.data)
      })
      .catch(err => console.log(err))

      // Call API to get products copy the the one above you need to create a new state for products and map it
     
      axios.get(`https://fakestoreapi.com/products`)
          .then(res =>{
            console.log(res.data)
            //store this data in state 
            setProducts(res.data)
          })
          .catch(err => console.log(err))
          
    }, []
    
  )





  //Make API call to get the categories 
//  https://fakestoreapi.com/products/categories
//When does this need to happen - When the page loads 
//Use effect 


  return (
    <div className={darkMode?"home-container home-dark" : home-container}>
    <div className='button-container'>
      

     <button>All</button>
   {
    categories.map(category => <button>{category}</button>)
    }
  
    <div className='product-cards'>
      {
    products.map(item => <ProductCard product={item}/>)
    }
    </div>
    </div>
    </div>
  )
}

export default Homepage
