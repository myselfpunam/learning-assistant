import React from 'react';
import './Cards.css'
const Cards = (props) => {
  const {product,addtoCart} = props
  const {img,time,name,bio} = props.product;
  return (
    <div className="card">
    <img className='img-fuild' src={img} alt="" />
    <div className="card-body bg-dark text-light">
      <h5 className="card-title ">{name}</h5>
      <p className="card-text">{bio}</p>
      <br />
      <p className="card-text">Time: {time} Minutes</p>
      <button onClick={()=> addtoCart(product)}  className="review-btn">Add to list  </button>
    </div>
  </div>
  );
};

export default Cards;