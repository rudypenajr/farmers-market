import React, { Component } from 'react';
import Product from './product'
import './products.css';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      quantity: this.props.quantity
    }
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    e.preventDefault()
    
    let update = this.state.quantity + 1
    this.setState({
      quantity: update
    })
  }

  decrement(e) {
    e.preventDefault()
    
    if (this.state.quantity === 0) {
      return
    }
    
    let update = this.state.quantity - 1
    this.setState({
      quantity: update
    })
  }

  render() {
    // console.log('conuter:', this.props)
    return (
      <div className="product__input">
        <a href="#" className="decrement" onClick={this.decrement}>–</a>
        <input type="text" className="quantity" value={this.state.quantity} />
        <a href="#" className="increment" onClick={this.increment}>+</a>
      </div>
    )
  }
}

export default Counter