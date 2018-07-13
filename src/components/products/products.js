import React, { Component } from 'react';
import Product from './product'
import './products.css';

class Products extends Component {
  constructor(props) {
    super(props)
  }

  renderItems(products, quantity) {
    let list = []
    products.map((p, ix)=> {
      list.push(
        <Product key={ix} name={p.name} image={p.image} quantity={quantity} />
      )
    })

    return list
  }

  render() {
    const { products, quantity } = this.props
    const list = this.renderItems(products, quantity)
    
    return (
      <div className="shop__products">
        <ul>
            {list}
        </ul>
      </div>
    );
  }
}
  
  export default Products;
  