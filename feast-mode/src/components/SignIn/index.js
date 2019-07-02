import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import * as actions from '../../backend/store/actions'

const SignInSchema = yup.object().shape({
  email: yup.string("Must be a valid email").email("Must be a valid email").required("Please enter your email"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Please enter your password"),
})

const SignInForm = ({ login, loading, error, cleanUp }) => {
  console.log(error) // remove this when you get error to show
  useEffect(() => {
    return () => {
      cleanUp()
    }
  }, [cleanUp])

  return(
    <Formik
      initialValues = {{
        email: "",
        password: "",
      }}
      validationSchema = {SignInSchema}
      onSubmit = {async ( values, { resetForm, setSubmitting }) => {
        await login(values)
        resetForm()
        setSubmitting(false)
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className = "classic-form">
            
          <div className = {["text-input", touched.email && errors.email && "text-error"].join(' ')}> 
            <label> Email </label> <br />
            <Field name = "email" type = "email"/> <br/>
            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "email" />
          </div>
          
          <div className = {["text-input", touched.password && errors.password && "text-error"].join(' ')}>
            <label> Password </label> <br />
            <Field name = "password" type = "password"/> <br/>
            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "password" />
          </div>

          <p>{error}</p> 
          <button type = "submit" disabled = {isSubmitting} className = "classic-button"> Log In </button>
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
  login: actions.signIn,
  cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)