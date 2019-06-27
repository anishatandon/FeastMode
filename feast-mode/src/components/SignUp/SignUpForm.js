import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    username: '',
    passwordOne: '',
    passwordTwo: '',
    email: '',
    phone: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = event => {
        const { username, email, phone, passwordOne, passwordTwo } = this.state;
        
        const isInvalid = (
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            phone === '' ||
            username === ''
        )
        event.preventDefault();

        if (isInvalid === true) {
            if (passwordOne === '' || email === '' || phone === '' || username === ''){
                alert("Please fill out all fields")
            } else {
                alert("Passwords must match")
            }
        } else {
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
            // Create a user in your Firebase realtime database
            return this.props.firebase
                .user(authUser.user.uid)
                .set({
                username,
                email,
                phone,
                })
            })
            .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push('/pay');
            })
            .catch(error => {
            this.setState({ error });
            });
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const {
            firstName,
            lastName,
            username,
            passwordOne,
            passwordTwo,
            email,
            phone,
            error,
        } = this.state;

        // When the form is invalid, the submit button is disabled. 
        // Here is when the button is disabled: 
        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        phone === '' ||
        username === '';


        return (
            <form onSubmit={this.handleSubmit} className = "classic-form">

                <div className = "aligned-inputs"> 
                    <div>
                        <label> First Name </label> <br />
                        <input
                        name = "firstName"
                        value = {firstName}
                        onChange = {this.handleChange}
                        type = "text"
                        /> <br />
                    </div>

                    <div>
                        <label> Last Name </label> <br />
                        <input
                        name = "lastName"
                        value = {lastName}
                        onChange = {this.handleChange}
                        type = "text"
                        /> <br/>
                    </div>
                </div>

                <div className = "compensate-input">
                    <label> Username </label> <br />
                    <input
                    name = "username"
                    value = {username}
                    onChange = {this.handleChange}
                    type = "text"
                    /> <br/>
                </div>
                
                <div className = "compensate-input"> 
                    <label> Email </label> <br />
                    <input
                    name = "email"
                    value = {email}
                    onChange = {this.handleChange}
                    type = "text"
                    /> <br/>
                </div>
                
                <div className = "compensate-input">
                    <label> Phone Number </label> <br />
                    <input
                    name = "phone"
                    value = {phone}
                    onChange = {this.handleChange}
                    type = "text"
                    /> <br/>
                </div>
                
                <div className = "aligned-inputs"> 
                    <div>
                        <label> Password </label> <br />
                        <input
                        name = "passwordOne"
                        value = {passwordOne}
                        onChange ={ this.handleChange}
                        type = "password"
                        /> <br/>
                    </div>
                    
                    <div>
                        <label> Confirm Password </label> <br />
                        <input
                        name = "passwordTwo"
                        value = {passwordTwo}
                        onChange = {this.handleChange}
                        type = "password"
                        /> <br/>
                    </div>
                </div>

                <button onMouseOver = {this.handleClick} type = "submit" className = "classic-button"> Next </button>

                {/* disabled={isInvalid} */}
                {error && <p>{error.message}</p>}

            </form>
        );
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

const SignUpLink = () => (
    <pre className = "link-text">
      New to FeastMode?   <Link to={ROUTES.SIGN_UP} className = "link">Sign Up</Link>
    </pre>
);

export default SignUpForm
export { SignUpLink, INITIAL_STATE }