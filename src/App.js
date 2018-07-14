import React, { Component } from 'react';
import Header from './components/header/header'
import Shop from './components/shop/shop'
import Loading from './components/loading/loading'
import Alert from './components/alert/alert'
import CheckOutButton from './components/buttons/checkout'
import { 
  handleUpdateToCart, 
  handleUpdateToTotalItems,
  handleUpdateToAlert, 
  getSelectedProduct,
  handleUpdateToSubTotal
} from './helpers/helpers'

import data from './data'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [], // a.k.a inventory
      cart: [], // application state
      activeProduct: {},
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
          quantity: 0
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

  // Helper Functions of Sorts

  // END: Helper Functions of Sorts

  handleAddToCart(product) {
    // Update Current Cart Item Quantity for Product
    const cart = handleUpdateToCart(this.state.cart, product.id, product.quantity)

    // Get Selected product
    const selected = getSelectedProduct(cart, product.id)

    // Update Total Amounts
    const totalAmount = handleUpdateToSubTotal(selected)
    
    // Update Total Items
    const totalItems = handleUpdateToTotalItems(cart)
 
    // Update Alert
    // const alert = handleUpdateToAlert(cart.ccItem, this.state.alert)
    // console.log('updating alert... ', alert)

    this.setState({
      // alert: alert,
      cart: cart,
      totalItems: totalItems,
      totalAmount: (totalAmount).toFixed(2)
    })
  }

  displayAlert(product) {
    const id = product.id
    const currentItem = this.state.products.find(obj => obj.id === id)
    
    if (currentItem.alert && currentItem.alert.length > 0) {
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
        {/* <Alert {...this.state} /> */}
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
