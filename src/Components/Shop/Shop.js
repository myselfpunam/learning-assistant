import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Task from '../Task/Task';
import { addToDb } from '../../utilites/StoreData';

import ('./Shop.css')
const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart , setCart] =useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data) )
  } ,[])
  const addtoCart = (product) => {
    console.log(product)
    const newCart = [...cart,product];
    setCart(newCart)
    addToDb(product.id)
  } 
  
  return (
    <div className='row '>
      <div className='product-container col-md-9 col-sm-12'>
      
      {
        products.map(product => <Cards 
          key = {product.id}
           product={product}
           addtoCart = {addtoCart}
           addToDb={addToDb}
           
            ></Cards> )
      }
      
      </div>
      <div className=' col-md-3 col-sm-12'> 
        
        <Task cart={cart}></Task>
      </div>
    </div>
  );
};

export default Shop;