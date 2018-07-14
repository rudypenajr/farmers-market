import React, { Component } from 'react';
import Products from '../products/products.js'
import './shop.css';

class Shop extends Component {
  render() {
    return (
      <div className="shop__container">
        <Products {...this.props} />
      </div>
    );
  }
}
  
  export default Shop;
  