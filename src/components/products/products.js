import React, { Component } from 'react';
import Product from './product'
import './products.css';

class Products extends Component {
  renderItems(props) {
    const { 
      products, 
      quantity, 
      handleAddToCart,
      displayAlert 
    } = this.props
    let list = []

    products.map((p, ix)=> {
      return list.push(
        <Product 
          key={ix}
          id={p.id} 
          name={p.name} 
          image={p.image}
          price={p.price}
          quantity={quantity} 
          updateQuantity={this.props.updateQuantity}
          handleAddToCart={handleAddToCart}
          displayAlert={displayAlert}
        />
      )
    })

    return list
  }

  render() {
    // const { products, quantity, handleAddToCart } = this.props
    // const list = this.renderItems(products, quantity, handleAddToCart)
    const list = this.renderItems(this.props)
    
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
  