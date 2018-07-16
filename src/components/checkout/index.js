import React, { Component } from 'react';
import Segment from '../segment'

class Checkout extends Component {
  constructor(props) {
    super(props)

    console.log('props::::', props)
    this.state = {
      taxes: 3.25,
      total: 0.00
    }
  }

  // componentDidMount() {
  //   let { totalAmount } = this.props    
  //   this.setState({
  //     total: totalAmount + taxes
  //   })
  // }

  renderSegments() {
    console.log('render segment :::: this.props', this.props)
    const { cart } = this.props
    let list = []

    for (var key in cart) {
      let vals = cart[key]
      if (vals.length > 0) {
        list.push(
          <Segment key={key} data={vals} />
        )
      }
    }

    return list
  }

  render() {
    let { totalAmount } = this.props
    let { taxes } = this.state
    let total = (Number(totalAmount) + taxes)
    console.log('::::::::', totalAmount, taxes, total)
    let title = this.props.totalItems ? 'Shopping Cart' : 'Your Shopping Cart is Empty.'
    let segments = this.renderSegments()

    return (
      <div className="shop__column shop__checkout">
        <h2>{title}</h2>
        {segments}
        {this.props.totalItems > 0 && 
          <div className="shop__cart__cost">
            <p className="shop__cart__sub-total">
              <span>Total before taxes:</span>
              <span>{`$${this.props.totalAmount}`}</span>
            </p>
            <p className="shop__cart__taxes">
              <span>Estimated taxes to be collected: </span>
              <span>{this.state.taxes}</span>
            </p>
            <p className="shop__cart__total">
              <span>Total: </span>
              <span>{`$${total}`}</span>
            </p>
            <button type="button">Checkout</button>
          </div>}
      </div>
    )
  }
}

export default Checkout