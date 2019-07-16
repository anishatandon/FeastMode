import React, { Component } from 'react';
import './SMSForm.css';

class SMSForm extends Component {
  constructor(props) {
    super(props);

    this.greeting = "Hey, there! "
    this.username = 'alexandra_is_cool' // get username from firebase somehow
    this.closing = " has invited you to join their group order. \n\nClick here to open FeastMode and join the feast: "
    this.url = '[insert url here]' // unique url that links back to FeastMode app (and the order specifically)

    this.state = {
      message: {
        to: '',
        body: this.greeting + this.username + this.closing + this.url
      },
      submitting: false,
      error: false,
      touched: {
        to: false
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  handleBlur = (field) => (evt) => {
    this.setState({
        touched: {
            ...this.state.touched, [field]: true
        }
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({ // reset what we have before
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
          });
        } else { // can't submit
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          className={this.state.error ? 'error sms-form' : 'sms-form'}
        >
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="tel"
              name="to"
              id="to"
              value={this.state.message.to}
              onChange={this.onHandleChange}
              onBlur = {this.handleBlur("firstName")}
            />
          </div>
          {/* <div>
            <label htmlFor="body">Body:</label>
            <textarea
              name="body"
              id="body"
              value={this.state.message.body}
              onChange={this.onHandleChange}
            />
          </div> */}
          <button type="submit" disabled={this.state.submitting}>
            Invite to the Feast
          </button>
        </form>
      </div>
    );
  }
}

export default SMSForm;