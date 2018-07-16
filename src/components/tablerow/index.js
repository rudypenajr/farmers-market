import React, { Component } from 'react';
import './segment.css';

const Row = function(props) {
  const { data } = props
  let promoClass = data.promoEnabled ? 'has__promo' : ''

  return (
    <tr className={`${promoClass}`}>
      <td>{data.name}</td>
      <td>&nbsp;</td>
      <td>{data.price.toFixed(2)}</td>
    </tr>
  )
}

const PromoRow = function(props) {
  const { data } = props
  let promo = data.promo[0]

  return (
    <tr className="promo-row">
      <td>Promo:</td>
      <td>{promo.name}</td>
      <td>-{data.discount.toFixed(2)}</td>
    </tr>
  )
}

class Segment extends Component {
  renderTableRows(data) {
    let list = []
    
    this.props.data.forEach((o, i) => {
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

export default Segment