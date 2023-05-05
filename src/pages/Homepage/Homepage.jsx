import React, { useEffect} from 'react'
import './Homepage.css'
import axios from 'axios'

function Homepage() {
 const [categories,setCategories]= React.useState([])
 const [products, setProducts]= React.useState([])
  useEffect(
    ()=>{
      // console.log('loaded')
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
    <div className='button-container'>
     <button>All</button>
   {
    categories.map(category => <button>{category}</button>)
    }
    </div>
  )
}

export default Homepage
