import React, { useEffect } from 'react'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import { connect } from 'react-redux'

import * as actions from '../../backend/store/actions'
import SignInSchema from './SignInSchemas.js'

const SignInForm = ({ login, loading, error, cleanUp }) => {
  let displayError

  if (error) {
      displayError = {display: "block"}
  } else {
      displayError = {display: "none"}
  }

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

          <p style = {displayError}>{error}</p>
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