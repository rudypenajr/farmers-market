import React, { Component } from 'react';

class CheckOutButton extends Component {
  render() {
    return (
      <div className="checkout__button">
        <button type="button" onClick={this._handleAddToCart}>
          Checkout
        </button>
      </div>
    )
  }
}

export default CheckOutButton