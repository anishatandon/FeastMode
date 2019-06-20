import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormUserDetails from "./FormUserDetails";
import FormBillingInfo from './FormBillingInfo';
import FormAppsYouHave from './FormAppsYouHave';
import Success from './Success';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  step: 1,
  username: '',
  passwordOne: '',
  passwordTwo: '',
  email: '',
  phone: '',
  creditCardNum: '',
  creditCardType: '',
  expirationDate: '',
  billAddress: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

  // Proceed to next step
  nextStep = () => {
    const{step} = this.state;
    this.setState({
      step: step + 1
    });
  }
   // Go back to previous step
  prevStep = () => {
    const{step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  onSubmit = event => {
    //the next button is clicked, go to the billing info page
  }

  onChange = event => {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value}) //can now handle checkboxes, too
  };


  render (){
    const { step } = this.state;
    const {
      username,
      passwordOne,
      passwordTwo,
      email,
      phone,
      creditCardNum,
      creditCardType,
      expirationDate,
      billAddress } = this.state;
    const values = { 
      username,
      passwordOne,
      passwordTwo,
      email,
      phone,
      creditCardNum,
      creditCardType,
      expirationDate,
      billAddress };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormBillingInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormAppsYouHave
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }


  // REMOVE THIS ONE
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <FormUserDetails/>
      </div>
      
      // <form onSubmit={this.onSubmit}>
      //   <input
      //     name="username"
      //     value={this.state.username}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Full Name"
      //   />
      //   <br/>
      //   <input
      //     name="email"
      //     value={this.state.email}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Email Address"
      //   />
      //   <br/>
      //   <input
      //     name="phone"
      //     value={this.state.phone}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Phone Number"
      //   />
      //   <br/>
      //   <input
      //     name="passwordOne"
      //     value={this.state.passwordOne}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Password"
      //   />
      //   <br/>
      //   <input
      //     name="passwordTwo"
      //     value={this.state.passwordTwo}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Confirm Password"
      //   />
      //   <br/>
      //   <button type="submit">Next</button>

      //   {this.state.error && <p>{this.state.error.message}</p>}
      // </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
