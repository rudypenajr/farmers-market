import React, { Component } from 'react';

class Button extends Component {
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
      <div className="product__action">
        <button type="button" onClick={this._handleAddToCart}>
          Add To Cart
        </button>
      </div>
    )
  }
}

export default Button