import React, { useEffect } from 'react'
import { Field, Formik } from 'formik'
import { connect } from 'react-redux'
import styled from 'styled-components'

import * as actions from '../../../backend/store/actions'
import LogInSchema from './LogInSchemas.js'

import { StyledForm } from '../../../style/FormUI/FormWrappers.js'
import { TextInput } from '../../../style/FormUI/Inputs.js'
import Button from '../../../style/FormUI/Buttons.js'
import { Message, MessageWrapper } from '../../../style/FormUI/Message.js'
import { ForgotPasswordLink } from '../../../style/FormUI/Links.js'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const LogInForm = ({ login, loading, error, cleanUp }) => {
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
      validationSchema = {LogInSchema}
      onSubmit = {async ( values, { setSubmitting }) => {
        await login(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting, isValid }) => (
        <StyledForm>
          
          <Field name = "email" type = "email" required component = {TextInput} label = "Email"/>
          <Wrapper>
            <Field name = "password" type = "password" required component = {TextInput} label = "Password"/>
            <ForgotPasswordLink />
          </Wrapper>
          
          <Button
            disabled = {!isValid || isSubmitting}
            loading = {loading ? 'Logging in...' : null}
            type = "submit"
          > 
            Log In 
          </Button>

          <MessageWrapper>
            <Message error show = {error}>{ error }</Message>
          </MessageWrapper>

        </StyledForm>
      )}
    </Formik>
  )
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
})

const mapDispatchToProps = {
  login: actions.logIn,
  cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)