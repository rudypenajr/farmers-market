import React, { Component } from 'react';
import Header from './components/header/header'
import Shop from './components/shop/shop'
import Loading from './components/loading/loading'
import Alert from './components/alert/alert'

import data from './data'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [], // a.k.a inventory
      cart: [], // application state
      totalItems: 0,
      totalAmount: 0.00, 
      quantity : 0,
      alert: ''
    }

    this.updateQuantity = this.updateQuantity.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.displayAlert = this.displayAlert.bind(this)
  }

  componentDidMount() {
    // mimic fetching api
    const self = this
    setTimeout(() => {
      let initialCart = []
      data.forEach((o) => {
        initialCart.push({
          ...o,
          amount: 0
        })
      })
      
      self.setState({
        products: data,
        cart: initialCart
      })
    }, 1000)
  }

  updateQuantity(qty){
    this.setState({
      quantity: qty
    })
  }

  handleAddToCart(product) {
    const id = product.id
    
    // Update Cart
    let cart = [...this.state.cart]
    let currentCartItem = cart.find(obj => obj.id === id)
    if (currentCartItem) {
      currentCartItem.amount = product.quantity
    }
    
    // Update No. of Items & Sub Total
    let totalItems = 0
    let totalAmount = 0
    cart.forEach((p) => {
      // No. of Items
      totalItems += p.amount

      // Sub Total
      totalAmount += (p.amount * p.price)
    })

    this.setState({
      totalItems: totalItems,
      totalAmount: (totalAmount).toFixed(2),
      cart: cart
    })
  }

  displayAlert(product) {
    const id = product.id
    const currentItem = this.state.products.find(obj => obj.id === id)
    
    if (currentItem.alert && currentItem.alert.length > 0) {
      console.log('current: ', currentItem)
      this.setState({
        alert: currentItem.alert
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          {...this.state} 
        />
        <Alert {...this.state} />
        {this.state.products.length === 0 ? 
          <Loading /> : 
          <Shop 
            {...this.state} 
            updateQuantity={this.updateQuantity}
            handleAddToCart={this.handleAddToCart}
            displayAlert={this.displayAlert}
          />
        }
      </div>
    );
  }
}

export default App;
