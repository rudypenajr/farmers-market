import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAdded: false
    }

    this._handleAddToCart = this._handleAddToCart.bind(this)
  }

  _handleAddToCart(e) {
    e.preventDefault()
    this.props.handleAddToCart(this.props)
    

    this.setState({ isAdded: true }, function(){
      setTimeout(() => {
        this.setState({
          isAdded: false,
        });
      }, 3500);
    });
  }

  render() {
    return (
      <div className="product__action">
        <button type="button" className={!this.state.isAdded ? "" : "added"} onClick={this._handleAddToCart}>
          {!this.state.isAdded ? "Add To Cart" : "✔ ADDED"}
        </button>
      </div>
    )
  }
}

export default Button