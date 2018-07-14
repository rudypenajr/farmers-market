import React, { Component } from 'react';
import Header from './components/header/header'
import Shop from './components/shop/shop'
import Loading from './components/loading/loading'
import Alert from './components/alert/alert'
import CheckOutButton from './components/buttons/checkout'

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
      alert: '',

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
    console.log(product)
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
      if (p.amount === 0) {
        return
      }
      
      // No. of Items
      totalItems += p.amount

      let subQuantity = 0
      let subTotal = 0
      let promoQuantity = 0
      let promoTotal = 0
      let price = p.price
      
      if (p.promo && p.promo.limit && p.amount >= p.promo.limit) {
        subQuantity = p.promo.limit
        subTotal = subQuantity * p.price
        
        promoQuantity = p.amount - p.promo.limit
        promoTotal = promoQuantity * p.promo.price
        // console.log(subQuantity, subTotal, promoQuantity, promoTotal)
      } else {
        subQuantity = p.price
        subTotal = subQuantity * p.price
      }

      // Sub Total
      // console.log(subTotal, promoTotal, subTotal + promoTotal)
      totalAmount = subTotal + promoTotal
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
        {/* <CheckOutButton {...this.state} /> */}
      </div>
    );
  }
}

export default App;
