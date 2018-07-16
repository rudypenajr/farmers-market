import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="app__header">
        <div className="app__header__wrapper">
          <h1 className="App-title">Farmers Market</h1>
          <div className="app__mini-cart">
            <div className="app__mini-cart__content">
              {/* <p>Cart: <span>{this.props.totalItems}</span></p> */}
              <p>Sub Total: <span>{`$${this.props.totalAmount}`}</span></p>
            </div>
            <div className="app__mini-cart__svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" viewBox="4 0 26 26">
                <text fill="#07A0C3" x="24" y="19">{this.props.totalItems}</text>
                <path fill="#07A0C3" x="10" y="0" d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
              </svg>
            </div>
           
          </div>
        </div>
      </header>
    )
  }
}

export default Header