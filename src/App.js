import React, { Component } from 'react';
import Header from './components/header'
import Shop from './components/shop'
import Loading from './components/loading'
// import Alert from './components/alert/alert'
// import CheckOutButton from './components/buttons/checkout'
import { 
  getSelectedProduct,
  handleUpdateToProducts,
  handleUpdateToCart,
  handleUpToTotalCost,
  handlePromoCheck,
  handleUpdateToTotalItems,
  handleUpdateToAlert, 
} from './helpers'

import data from './data'
import cart from './data/cart'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [], // a.k.a inventory
      cart: cart, // application state
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
          quantity: 0,
          promoEnabled: false
        })
      })
      
      self.setState({
        products: initialCart
        // cart: initialCart
      })
    }, 1000)
  }

  updateQuantity(id, qty){
    let products = handleUpdateToProducts(this.state.products, id, qty)
    
    this.setState({
      products: products
    })
  }

  handleAddToCart(product) {
    // Get Selected product
    const selected = getSelectedProduct(this.state.products, product.id)

    // Update Current Cart Item Quantity for Product
    let cart = handleUpdateToCart(this.state.products, this.state.cart)

    // Check for Promos
    cart = handlePromoCheck(this.state.products, cart, totalCost)

    // Update Total Cost/Amounts
    let totalCost = handleUpToTotalCost(cart)
    // const totalAmount = handleUpdateToSubTotal(selected)
    
    // Update Total Items
    const totalItems = handleUpdateToTotalItems(this.state.products)
 
    // Update Alert
    // const alert = handleUpdateToAlert(cart.ccItem, this.state.alert)

    this.setState({
      // alert: alert,
      cart: cart,
      totalItems: totalItems,
      totalAmount: (totalCost).toFixed(2)
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
    console.log('this.state.cart: ', this.state.cart)
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
