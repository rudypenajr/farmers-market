import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="app__header">
        <h1 className="App-title">Farmers Market</h1>
        <div className="app__mini-cart">
          <p>No. of Items: <span>{this.props.totalItems}</span></p>
          <p>Sub Total: <span>{`$${this.props.totalAmount}`}</span></p>
        </div>
      </header>
    )
  }
}

export default Header