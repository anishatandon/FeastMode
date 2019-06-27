import React, { Component } from 'react';
import "./SignUp.css";

import AppImgs from "./AppImgs";

class AppsYouHave extends Component{
    constructor() {
        super();
        this.state = {
            isPM: false, //postmates
            isGH: false, //grubhub
            isDD: false, //doordash
            isUE: false, //ubereats
        };
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      }
    
      handleSubmit = event => {
        event.preventDefault();
        this.props.history.push('/success');
      }
    
      handleChange = event => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value}) //can now handle checkboxes, too
        console.log(this.state)
      };
    
    
      render() {
        return (
          <div className = "sign-up-form">
            <h2>Which delivery apps do you have?</h2>
    
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input 
                        type="checkbox" 
                        name="isPM" //same as the thing in state
                        checked={this.state.isPM}
                        onChange={this.handleChange}
                    /> Postmates
                </label>
                
                {" "}
                <label>
                    <input 
                        type="checkbox" 
                        name="isGH" //same as the thing in state
                        checked={this.state.isGH}
                        onChange={this.handleChange}
                    /> GrubHub
                </label>
                
                {" "}
                <label>
                    <input 
                        type="checkbox" 
                        name="isDD" //same as the thing in state
                        checked={this.state.isDD}
                        onChange={this.handleChange}
                    /> DoorDash
                </label>
                
                {" "}
                <label>
                    <input 
                        type="checkbox" 
                        name="isUE" //same as the thing in state
                        checked={this.state.isUE}
                        onChange={this.handleChange}
                    /> UberEats
                </label>
                <br />
                <br />
                <AppImgs />
                <br />
                <button type="submit" className = "button">Next</button>
    
              {this.state.error && <p>{this.state.error.message}</p>}
            </form>
          </div>
        );
      }
}


export default AppsYouHave