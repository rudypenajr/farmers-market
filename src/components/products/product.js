import React, { Component } from 'react';
import Counter from '../counter/counter'

import './products.css';

class Product extends Component {
  constructor(props) {
    super(props)

    this._handleAddToCart = this._handleAddToCart.bind(this)
  }

  _handleAddToCart(e) {
    e.preventDefault()
    this.props.handleAddToCart(this.props)
  }

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
        <div className="product__action">
          <button type="button" onClick={this._handleAddToCart}>Add To Cart</button>
        </div>
      </li>
    )
  }
}

export default Product