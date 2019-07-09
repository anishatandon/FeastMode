import React, { useEffect, useState } from 'react'
import { Field, Formik } from 'formik'
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Cards from 'react-credit-cards'

import { SignUpSchema } from './SignUpSchema.js'
import { StyledForm } from '../../../style/UI/FormWrappers.js'
import Button from '../../../style/UI/Buttons.js'
import { TextInput } from '../../../style/UI/Inputs.js'
import { Message, MessageWrapper } from '../../../style/UI/Message.js'
import { getCreditCardType } from '../CreditCard.js'

import 'react-credit-cards/es/styles-compiled.css'

const AlignedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div { width: 48% };
`
const OuterColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const ColumnWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div { width: 100% };
`

const SignUpForm = ({ signUp, cleanUp, error, loading }) => {
  const [focused, setFocused] = useState("")

  useEffect(() => {
    return () => {
      cleanUp()
    }
  }, [cleanUp])

  return (
    <Formik
      initialValues = {{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        passwordOne: "",
        passwordTwo: "",
        creditCard: "",
        creditCardType: "",
        expiry: "",
        cvc: "",
        apps: [false, false, false, false], // Postamtes, GrubHub, DoorDash, UberEats
      }}
      validationSchema = {SignUpSchema}
      onSubmit = {async ( values, { resetForm, setSubmitting }) => {
        await signUp(values)
        resetForm()
        setSubmitting(false)
      }}
    >
      {({ values, isSubmitting, isValid, handleChanged }) => (
        <StyledForm>

          <AlignedWrapper>
            <Field name = "firstName" type = "text" component = {TextInput} label = "First Name" onClick = {() => setFocused("name")}/>
            <Field name = "lastName" type = "text" component = {TextInput} label = "Last Name"/>
          </AlignedWrapper>

          <Field name = "username" type = "text" component = {TextInput} label = "Username"/>
          <Field name = "email" type = "email" component = {TextInput} label = "Email"/>
          <Field name = "phone" type = "text" component = {TextInput} label = "Phone"/>
          
          <AlignedWrapper>
            <Field name = "passwordOne" type = "password" component = {TextInput} label = "Password"/>
            <Field name = "passwordTwo" type = "password" component = {TextInput} label = "Confirm Password"/>
          </AlignedWrapper>

          <Field name = "creditCard" type = "text" component = {TextInput} label = "Card Number" onClick = {() => setFocused("number")}/>
          <OuterColumnWrapper>
            <Cards
              number = {values.creditCard}
              name = {values.firstName + " " + values.lastName}
              expiry = {values.expiry}
              cvc ={values.cvc}
              focused = {focused}
            />
            <ColumnWrapper>
              <Field name = "expiry" type = "text" component = {TextInput} label = "Expiration Date" onClick = {() => setFocused("expiry")}/>
              <Field name = "cvc" type = "text" component = {TextInput} label = "Security Code" onClick = {() => setFocused("cvc")}/>
            </ColumnWrapper>
          </OuterColumnWrapper>

          <AlignedWrapper>
              <Field name = "expDate" type = "text" component = {TextInput} label = "Expiration Date"/>
              <Field name = "secCode" type = "text" component = {TextInput} label = "Security Code"/>
          </AlignedWrapper>

          <Button
            disabled = {!isValid || isSubmitting}
            loading = {loading ? 'Creating account...' : null}
            type = "submit"
          > 
            Sign Up 
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
  signUp: actions.signUp,
  cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)