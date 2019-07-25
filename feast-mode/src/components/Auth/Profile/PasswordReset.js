import React, { useEffect } from 'react'
import { Field, Formik } from 'formik'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as actions from '../../../backend/store/actions'

import { PasswordResetSchema } from './ProfileSchemas.js'

import { StyledForm, FormWrapper } from '../../../style/FormUI/FormWrappers.js'
import { TextInput } from '../../../style/FormUI/Inputs.js'
import { Message } from '../../../style/FormUI/Message.js'
import Heading from '../../../style/FormUI/Heading.js'
import Button from '../../../style/FormUI/Buttons.js'

const PasswordResetButton = styled(Button)`
  margin-top: 1rem;
`
const PasswordResetMessageWrapper = styled.div`
  position: absolute;
  bottom: -3.2rem;
`

const PasswordResetForm = ({ sendEmail, loading, error, cleanUp }) => {
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
      validationSchema = {PasswordResetSchema}
      onSubmit = {async ( values, { setSubmitting }) => {
        await sendEmail(values)
        setSubmitting(false);
      }}
    >
      {({ isValid, isSubmitting }) => (
        <FormWrapper>
          <Heading noMargin bold size = "h2"> Reset Your Password </Heading>
          <Heading size = "h4"> Type in your email to receive a new password. You can change it later in your profile. </Heading>
          <StyledForm>

            <Field name = "email" type = "email" required component = {TextInput} label = "Email"/>

            <PasswordResetButton
              disabled = {!isValid || isSubmitting}
              loading = {loading ? 'Sending recover email...' : null}
              type = "submit"
            > 
             Send Email
            </PasswordResetButton>

            <PasswordResetMessageWrapper>
              <Message error show = {error}>{ error }</Message>
            </PasswordResetMessageWrapper>
            <PasswordResetMessageWrapper>
              <Message success show = {error === false}> Email sent successfully! </Message>
            </PasswordResetMessageWrapper>

          </StyledForm>
        </FormWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetForm)