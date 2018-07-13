import React, { Component } from 'react';
import Header from './components/header/header'
import Shop from './components/shop/shop'
import Loading from './components/loading/loading'
import data from './data'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0, 
      // cartBounce: false,
      quantity : 0,
    }
  }

  componentDidMount() {
    // mimic fetching api
    const self = this
    setTimeout(() => {
      self.setState({
        products: data
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state} />
        {this.state.products.length === 0 ? <Loading /> : <Shop {...this.state} />}
      </div>
    );
  }
}

export default App;
