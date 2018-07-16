import React, { Component } from 'react';
import TableRow from '../tablerow'
import './checkout.css';

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taxes: 3.25,
      total: 0.00
    }
  }

  renderTableRow() {
    const { cart } = this.props
    let list = []

    console.log('iterating through keys in cart...')
    for (var key in cart) {
      let vals = cart[key]
      if (vals.length > 0) {
        list.push(
          <TableRow key={key} data={vals} />
        )
      }
    }

    return list
  }

  render() {
    let { totalAmount } = this.props
    let { taxes } = this.state
    let total = (Number(totalAmount) + taxes)
    let title = this.props.totalItems ? 'Shopping Cart' : 'Your Shopping Cart is Empty.'
    let segments = this.renderTableRow()

    return (
      <div className="shop__column shop__checkout">
        <h2>{title}</h2>
        {this.props.totalItems > 0 && 
          <div className="shop__cart__itemized">
            <table>
              <thead>
                <tr>
                  <td>Item</td>
                  <td>&nbsp;</td>
                  <td>Price</td>
                </tr>
              </thead>
              {segments}
            </table>
          </div>
        }

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