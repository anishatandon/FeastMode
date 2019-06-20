import React, {Component} from 'react';

export class FormUserDetails extends Component {
    continue = event => {
        event.preventDefault()
        this.props.nextStep();

    }
    render() {
        const {values, onChange} = this.props;
        return (
          <form onSubmit={this.onSubmit}>
            <input
              name="username"
              defaultValue={this.props.username}
              onChange={this.props.onChange('username')}
              type="text"
              placeholder="Full Name"
            />
            <br/>
            <input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <br/>
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              type="text"
              placeholder="Phone Number"
            />
            <br/>
            <input
              name="passwordOne"
              value={this.state.passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <br/>
            <input
              name="passwordTwo"
              value={this.state.passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <br/>
            <button type="submit">Next</button>
    
            {this.state.error && <p>{this.state.error.message}</p>}
          </form>
        );
      }    
}


export default FormUserDetails
