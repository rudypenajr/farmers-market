import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.setState(prevState => ({
      quantity: update
    }), function(){
      this.props.updateQuantity(this.props.id, this.state.quantity);
      this.props.displayAlert(this.props)
    });
  }

  decrement(e) {
    e.preventDefault()
    
    if (this.state.quantity === 0) {
      return
    }

    // this.setState({
    //   quantity: update
    // })
    
    let update = this.state.quantity - 1
    this.setState(prevState => ({
      quantity: update
    }), function(){
      this.props.updateQuantity(this.props.id, this.state.quantity);
      this.props.displayAlert(this.props)
    });
  }

  render() {
    return (
      <div className="product__input">
        <a href="#" className="decrement" onClick={this.decrement}>–</a>
        <input type="text" className="quantity" value={this.state.quantity} />
        <a href="#" className="increment" onClick={this.increment}>+</a>
      </div>
    )
  }
}

Counter.propTypes = {
  quantity: PropTypes.number
};

export default Counter