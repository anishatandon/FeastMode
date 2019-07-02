import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import * as actions from '../../backend/store/actions'

const SignUpSchema = yup.object().shape({
    firstName: yup.string("Must be a valid name").required("Please enter your name"),
    lastName: yup.string("Must be a valid name"),
    username: yup.string("Must be a valid username").min(4, "Username must be at least 4 characters").required("Please enter a username"),
    email: yup.string("Must be a valid email").email("Must be a valid email").required("Please enter an email"),
    phone: yup.number("Must be a valid phone number").positive("Must be a valid phone number").integer("Must be a valid phone number").required("Please enter a phone number"),
    passwordOne: yup.string().min(8, "Password must be at least 8 characters").required("Please enter a password"),
    passwordTwo: yup.string().oneOf([yup.ref("passwordOne"), null], "Passwords don't match").required("Make sure you can remember your password!")
})

const SignUpForm = ({ signUp, loading, error, cleanUp}) => {
    console.log(error) // remove this when you get error to show
    useEffect(() => {
        return () => {
            cleanUp()
        }
    }, [cleanUp])

    return(
        <Formik
            initialValues = {{
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                phone: "",
                passwordOne: "",
                passwordTwo: '',
            }}
            validationSchema = {SignUpSchema}
            onSubmit = {async ( values, { resetForm, setSubmitting }) => {
                await signUp(values)
                resetForm()
                setSubmitting(false)
                // props.history.push("/pay")
            }} 
        >
            {({ errors, touched, isSubmitting}) => (
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

                    {/* <p>{error}</p> Conditional rendering of the paragraph with styled components */}
                    <button type = "submit" disabled = {isSubmitting} className = "classic-button"> Next </button>

                </Form>
            )}
        </Formik>
    )
}

const mapStateToProps = ({ auth }) => ({
    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {
    signUp: actions.signUp,
    cleanUp: actions.clean,
}

const SignUpLink = () => (
    <pre className = "link-text">
      New to FeastMode?   <Link to={ROUTES.SIGN_UP} className = "link">Sign Up</Link>
    </pre>
);

export { SignUpLink }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm))