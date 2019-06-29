import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { Form, Field, ErrorMessage, withFormik } from 'formik'
import * as yup from 'yup'
import Firebase from '../Firebase/index.js'

const SignUpFormBase2 = ({
    errors,
    touched,
    isSubmitting
}) => (
    <Form className = "classic-form">
        <div className = "aligned-inputs text-input"> 
            <div className = {touched.firstName && errors.firstName && "text-error"}>
                <label> First Name </label> <br />
                <Field name = "firstName" type = "text"/> <br />
                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "firstName" />
            </div>

            <div className = {touched.lastName && errors.lastName && "text-error"}>
                <label> Last Name </label> <br />
                <Field name = "lastName" type = "text"/> <br/>
                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "lastName" />
            </div>
        </div>

        <div className = {["compensate-input text-input", touched.username && errors.username && "text-error"].join(' ')}>
            <label> Username </label> <br />
            <Field name = "username" type = "text"/> <br/>
            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "username" />
        </div>
        
        <div className = {["compensate-input text-input", touched.email && errors.email && "text-error"].join(' ')}> 
            <label> Email </label> <br />
            <Field name = "email" type = "email"/> <br/>
            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "email" />
        </div>
        
        <div className = {["compensate-input text-input", touched.phone && errors.phone && "text-error"].join(' ')}>
            <label> Phone Number </label> <br />
            <Field name = "phone" type = "text"/> <br/>
            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "phone" />
        </div>
        
        <div className = "aligned-inputs text-input"> 
            <div className = {touched.passwordOne && errors.passwordOne && "text-error"}>
                <label> Password </label> <br />
                <Field name = "passwordOne" type = "password"/> <br/>
                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "passwordOne" />
            </div>
            
            <div className = {touched.passwordTwo && errors.passwordTwo && "text-error"}>
                <label> Confirm Password </label> <br />
                <Field name = "passwordTwo" type = "password"/> <br/>
                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "passwordTwo" />
            </div>
        </div>

        <button disabled = {isSubmitting} className = "classic-button"> Next </button>
        <p> </p>

    </Form>
)

const FormikForm = withFormik({
    mapPropsToValues() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phone: "",
            passwordOne: "",
            passwordTwo: ""
        }
    },

    validationSchema: yup.object().shape({
        firstName: yup.string("Must be a velid name").required("Please enter your name"),
        lastName: yup.string("Must be a velid name"),
        username: yup.string("Must be a velid username").min(4, "Username must be at least 4 characters").required("Please enter a username"),
        email: yup.string("Must be a velid email").email("Must be a valid email").required("Please enter an email"),
        phone: yup.number("Must be a valid phone number").positive("Must be a valid phone number").integer("Must be a valid phone number").required("Please enter a phone number"),
        passwordOne: yup.string().min(6, "Password must be at least 6 characters").required("Please enter a password"),
        passwordTwo: yup.string().oneOf([yup.ref("passwordOne"), null], "Passwords don't match").required("Make sure you can remember your password!")
    }),

    handleSubmit(values, { resetForm, setSubmitting }) {
        const { username, email, phone, passwordOne} = values

        Firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
            // Create a user in your Firebase realtime database
            return Firebase
                .user(authUser.user.uid)
                .set({
                username,
                email,
                phone,
                })
            })
            .then(() => {
            this.setState({ ...INITIAL_STATE })
            this.props.history.push('/pay')
            })
            .catch(error => {
            this.setState({ error })
        })

        setTimeout(() => {
            console.log("Submitted") 
            resetForm()
            setSubmitting(false)
        }, 1000)
    }
})(SignUpFormBase2)

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

    render() {
        return (
            <div> All gone </div>
        );
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(FormikForm);

const SignUpLink = () => (
    <pre className = "link-text">
      New to FeastMode?   <Link to={ROUTES.SIGN_UP} className = "link">Sign Up</Link>
    </pre>
);

export default SignUpForm
export { SignUpLink, INITIAL_STATE };