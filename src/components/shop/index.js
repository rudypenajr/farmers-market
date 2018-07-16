import React, { Component } from 'react';
import Products from '../products'
import Checkout from '../checkout'
import './shop.css';

class Shop extends Component {
  render() {
    return (
      <div className="shop__container">
        <div className="shop__container__wrapper">
          <Products {...this.props} />
          <Checkout {...this.props} />
        </div>
      </div>
    );
  }
}
  
  export default Shop;
  