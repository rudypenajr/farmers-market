import React, { Component } from 'react';
import PropTypes from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import './alert.css'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      alert: props.alert
    }
  }

  render() {
    const { alert } = this.props
    return (
      <div className="app__alert">
        {alert.length > 0 && <p>{alert}</p>}
      </div>
    )
  }
}

Alert.propTypes = {
  alert: PropTypes.string
};


export default Alert