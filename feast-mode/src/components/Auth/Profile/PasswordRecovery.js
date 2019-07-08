import React, { useEffect } from 'react'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import { connect } from 'react-redux'

import * as actions from '../../../backend/store/actions'
import { PasswordRecoverySchema } from './ProfileSchemas.js'

const PasswordRecoveryForm = ({ sendEmail, loading, error, cleanUp }) => {
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
      }}
      validationSchema = {PasswordRecoverySchema}
      onSubmit = {async ( values, { resetForm, setSubmitting }) => {
        await sendEmail(values)
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <div className="password-change-form">
          <h1> Recover your password </h1>
          <Form className = "classic-form">
      
            <div className = {["text-input", touched.email && errors.email && "text-error"].join(' ')}> 
              <label> Email </label> <br />
              <Field name = "email" type = "email"/> <br/>
              <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "email"/>
            </div>
            <p style = {displayError}>{error}</p>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className = "classic-button"
            > 
              Send Recover Email 
            </button>

        </Form>
        </div>
      )}
    </Formik>
  )
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error,
})

const mapDispatchToProps = {
  sendEmail: actions.recoverPassword,
  cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecoveryForm)