const addToDb = id => {
  




  // let shoppingCart ;
  // // get shopping cart
  // const storedCart = localStorage.getItem('shopping-cart');
  // if(storedCart){
  //   shoppingCart= JSON.parse(storedCart)
  // }
  // else{
  //   shoppingCart = {}
  // }
  
  // // add quantity
  
  // const quantity = shoppingCart[id];
  // if(quantity){
    
  //   const newQuantity = parseInt(quantity) + 1;
  //   shoppingCart[id] = newQuantity;
    
    
  // }
  // else{
  //   shoppingCart[id]= 1;
    
    
  // }
  // // set cart
  // localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart) )
  let shoppingCart = {};
const storedCart = localStorage.getItem('shopping-cart')
if(storedCart){
  shoppingCart = JSON.parse(storedCart)
}
const quantity = shoppingCart[id]
if(quantity){
  shoppingCart[id] = quantity +1;
}
else{
  shoppingCart[id] = 1 ;
}
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

}

const removeFromDb = id => {
  
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    const shoppingCart = JSON.parse(storedCart)
    if(id in shoppingCart){
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
    }
  }
}
export {addToDb , removeFromDb}