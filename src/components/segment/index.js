import React, { Component } from 'react';
import './segment.css';

const Item = function(props) {
  return (
    <p>
      <span>Qty: </span>
      <span>{ props.quantity }</span>
    </p>    
  )
}

class Segment extends Component {
  renderSegment(data) {
    let list = []
    // Name:
    // qty: 
      
    this.props.data.forEach((o) => {
      console.log('o: ', o)
      list.push(<Item {...this.props} />)
    })
    return list
  }

  render() {
    let { data } = this.props
    console.log('segment :::: this.props', this.props)
    let main = data[0]
    // let items = this.renderSegment(main)
    
    return (
      <div className="shop__segment">
        <p className="shop__cart__product">
          <span className="shop__cart__product-name">{main.name}</span>
          ,<span className="shop__cart__product-qty">qty: {main.quantity}</span>  
        </p>
      </div>
    )
  }
}

export default Segment