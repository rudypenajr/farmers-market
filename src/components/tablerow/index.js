import React, { Component } from 'react';
import './segment.css';

const Row = function(props) {
  const { data } = props
  const promoEnabled = data.promoEnabled
  let promoClass = promoEnabled ? 'has__promo' : ''

  return (
    <tr className={promoClass}>
      <td>{data.name}</td>
      <td>&nbsp;</td>
      <td>{data.price.toFixed(2)}</td>
    </tr>
  )
}

const PromoRow = function(props) {
  const { data } = props
  return (
    <tr class="promo-row">
      <td>Promo:</td>
      <td>{data.promo.name}</td>
      <td>&nbsp;</td>
    </tr>
  )
}

class Segment extends Component {
  renderTableRows(data) {
    let list = []
    
    console.log('data: ', this.props.data)
    this.props.data.forEach((o, i) => {
      const promoEnabled = o.promoEnabled
      // console.log('i: ', i)
      // console.log('o: ', o)
      list.push(<Row key={i} data={o} />)

      if (o.promoEnabled) {
        list.push(<PromoRow key={`${i}-promo`} data={o} />)
      }
    })
    return list
  }

  render() {
    let { data } = this.props
    let items = this.renderTableRows(data)
    // console.log('items: ', items)
    
    return (
      <tbody>
        {items}
      </tbody>
    )
  }
}

{/* 
<div className="shop__segment">
<p className="shop__cart__product">
<span className="shop__cart__product-name">{main.name}</span>
,<span className="shop__cart__product-qty">qty: {main.quantity}</span>  
</p>
</div> 
*/}

export default Segment