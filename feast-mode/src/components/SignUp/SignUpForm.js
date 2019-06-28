import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

// import { Formik, Form, Field, ErrorMessage } from 'formik'

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    username: '',
    passwordOne: '',
    passwordTwo: '',
    email: '',
    phone: '',
    touched: {
        firstName: false,
        lastName: false,
        username: false,
        passwordOne: false,
        passwordTwo: false,
        email: false,
        phone: false,
    }
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = event => {
        const { username, email, phone, passwordOne, passwordTwo } = this.state;

        event.preventDefault();

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
            .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push('/pay');
            })
            .catch(error => {
            this.setState({ error });
            });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {
                ...this.state.touched, [field]: true
            }
        })
    }

    validate = () => {
        return {
            firstName: this.state.firstName.length == 0,
            lastName: this.state.lastName.length == 0,
            username: this.state.username.length == 0,
            passwordOne: this.state.passwordOne.length == 0,
            passwordTwo: this.state.passwordTwo != this.state.passwordOne,
            phone: this.state.phone.length == 0,
            email: this.state.email.length == 0
        }
    }

    render() {
        const errors = this.validate()
        const shouldMarkError = (field) => {
            const hasError = errors[field]
            const shouldShow = this.state.touched[field]
            return hasError && shouldShow
        }

        return (
            <form onSubmit={this.handleSubmit} className = "classic-form">

                <div className = "aligned-inputs">
                    <div className = {shouldMarkError("firstName") && "error"}>
                        <label> First Name </label> <br />
                        <input
                        name = "firstName"
                        value = {this.state.firstName}
                        onChange = {this.handleChange}
                        onBlur = {this.handleBlur("firstName")}
                        type = "text"
                        /> <br />
                        <p className = "error-text" style = {{ display: shouldMarkError("firstName") ? "block" : "none" }}> Please enter your name </p>
                    </div>

                    <div>
                        <label> Last Name </label> <br />
                        <input
                        name = "lastName"
                        value = {this.state.lastName}
                        onChange = {this.handleChange}
                        onBlur = {this.handleBlur("lastName")}
                        type = "text"
                        /> <br/>
                    </div>
                </div>

                <div className = {["compensate-input", shouldMarkError("username") && "error"].join(" ")}>
                    <label> Username </label> <br />
                    <input
                    name = "username"
                    value = {this.state.username}
                    onChange = {this.handleChange}
                    onBlur = {this.handleBlur("username")}
                    type = "text"
                    /> <br/>
                    <p className = "error-text" style = {{ display: shouldMarkError("username") ? "block" : "none" }}> Please enter a username </p>
                </div>

                <div className = {["compensate-input", shouldMarkError("email") && "error"].join(" ")}>
                    <label> Email </label> <br />
                    <input
                    name = "email"
                    value = {this.state.email}
                    onChange = {this.handleChange}
                    onBlur = {this.handleBlur("email")}
                    type = "text"
                    /> <br/>
                    <p className = "error-text" style = {{ display: shouldMarkError("email") ? "block" : "none" }}> Please enter your email </p>
                </div>

                <div className = {["compensate-input", shouldMarkError("phone") && "error"].join(" ")}>
                    <label> Phone Number </label> <br />
                    <input
                    name = "phone"
                    value = {this.state.phone}
                    onChange = {this.handleChange}
                    onBlur = {this.handleBlur("phone")}
                    type = "text"
                    /> <br/>
                    <p className = "error-text" style = {{ display: shouldMarkError("phone") ? "block" : "none" }}> Please enter your phone number </p>
                </div>

                <div className = "aligned-inputs">
                    <div className = {shouldMarkError("passwordOne") && "error"}>
                        <label> Password </label> <br />
                        <input
                        name = "passwordOne"
                        value = {this.state.passwordOne}
                        onChange ={ this.handleChange}
                        onBlur = {this.handleBlur("passwordOne")}
                        type = "password"
                        /> <br/>
                        <p className = "error-text" style = {{ display: shouldMarkError("passwordOne") ? "block" : "none" }}> Please enter a password </p>
                    </div>

                    <div className = {shouldMarkError("passwordTwo") && "error"}>
                        <label> Confirm Password </label> <br />
                        <input
                        name = "passwordTwo"
                        value = {this.state.passwordTwo}
                        onChange = {this.handleChange}
                        onBlur = {this.handleBlur("passwordTwo")}
                        type = "password"
                        /> <br/>
                        <p className = "error-text" style = {{ display: shouldMarkError("passwordTwo") ? "block" : "none" }}> Passwords don't match </p>
                    </div>
                </div>

                <button type = "submit" className = "classic-button"> Next </button>

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
export { SignUpLink, INITIAL_STATE };
