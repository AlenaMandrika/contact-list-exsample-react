import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return (
      <li className="contact">
        <img className="contact-image" src={this.props.image} alt={this.props.alt} width="60px" height="60px" />
        <div className="contact-info">
          <div className="contact-name"> {this.props.name} </div>
          <div className="contact-number"> {this.props.phoneNumber} </div>
          <div className="contact-number"> {this.props.email} </div>
        </div>
      </li>
    )
  }
}

export default Contact
