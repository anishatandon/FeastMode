import React, { Component } from 'react';
import "./SignUp.css";

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
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      }
    
      handleSubmit = event => {
        console.log("submitted")
        event.preventDefault()
        //the next button is clicked, go to success page
      }
    
      handleChange = event => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value}) //can now handle checkboxes, too
      };
    
    
      render() {
        return (
          <div className = "sign-up-form">
            <h2>Payment Info</h2>
    
            <form onSubmit={(e) => {e.preventDefault(); this.props.history.push('/success')}}>
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
                    <select className="select-css" value={this.state.creditCardType} onChange={this.handleChange} name="creditCardType">
                        <option value="visa">Visa</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="amex">American Express</option>
                    </select>
                </label>
                <br/>
                <br />
                <button type="submit" className = "button">Submit</button>
    
              {this.state.error && <p>{this.state.error.message}</p>}
            </form>
          </div>
        );
      }
}


export default PaymentInfo