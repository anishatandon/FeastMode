import React, { Component } from 'react';

class PaymentInfo extends Component{
  constructor() {
      super();
      this.state = {
          creditCardNum: '',
          creditCardType: '',
          expirationDate: '',
          securityCode: '',
          billAddress: ''
      };
    }
  
    handleSubmit = event => {
      event.preventDefault()
      this.props.history.push('/appsyouhave')
      //the next button is clicked, go to success page
    }
  
    handleChange = event => {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value}) //can now handle checkboxes, too
    };
  
    render() {
      return (
        <div className = "sign-up">
          <h1>Payment Info</h1>
  
          <form onSubmit={this.handleSubmit} className = "classic-form">
              <input
                  name="creditCardNum"
                  value={this.state.creditCardNum}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Card Number"
              />
              <br/>
              <br/>
              <input
                  name="expirationDate"
                  value={this.state.expirationDate}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Exp Date"
              />
              <br/>
              <br/>
              <input
                  name="securityCode"
                  value={this.state.securityCode}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Security Code"
              />
              <br/>
              <br />
              <label>
                  Card Type: 
                  <select className="select-box" value={this.state.creditCardType} onChange={this.handleChange} name="creditCardType">
                  <option value="none">-- Choose One --</option>
                      <option value="amex">American Express</option>
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="amex">Discover</option>
                  </select>
              </label>
              <br/>
              <br />
              <button type="submit" className = "classic-button"> Next </button>
  
            {this.state.error && <p>{this.state.error.message}</p>}
          </form>
        </div>
      );
    }
}


export default PaymentInfo