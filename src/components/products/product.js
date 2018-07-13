import React from 'react';
import Counter from './counter'

const Product = (props) => {
  return (
    <li key={props.key}>
      <div className="product__detail">
        <p>{props.name}</p>  
      </div>
      <Counter quantity={props.quantity} />
      <div className="product__action">
        <button type="button">Add To Cart</button>
      </div>
    </li>
  )
}

export default Product