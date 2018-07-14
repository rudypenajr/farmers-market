import React, { Component } from 'react';
import Counter from '../counter/counter'
import Button from '../buttons/product'

import './products.css';

class Product extends Component {
  render() {
    return (
      <li key={this.props.key} id={this.props.id}>
        <div className="product__detail">
          <p>{this.props.name} ({`$${this.props.price}`})</p>  
        </div>
        <Counter 
          {...this.props}
          quantity={this.props.quantity} 
          updateQuantity={this.props.updateQuantity}
          displayAlert={this.props.displayAlert}
        />
        <Button {...this.props} />
      </li>
    )
  }
}

export default Product