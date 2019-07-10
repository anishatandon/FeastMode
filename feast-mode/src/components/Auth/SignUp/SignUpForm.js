import React, { useEffect, useState } from 'react'
import { Field, Formik } from 'formik'
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux'
import Cards from 'react-credit-cards'

import { SignUpSchema } from './SignUpSchema.js'
import { StyledForm, AlignedWrapper } from '../../../style/UI/FormWrappers.js'
import Button from '../../../style/UI/Buttons.js'
import { TextInput, Label } from '../../../style/UI/Inputs.js'
import { Message, MessageWrapper } from '../../../style/UI/Message.js'
import { getCreditCardType } from '../CreditCard.js'

import postmates from '../../../images/postmates.jpg';
import doordash from '../../../images/doordash.jpg'
import grubhub from '../../../images/grubhub.png';
import ubereats from '../../../images/ubereats.jpeg';


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
        expDate: "",
        secCode: "",
        apps: [false, false, false, false], // Postamtes, GrubHub, DoorDash, UberEats
      }}
      validationSchema = {SignUpSchema}
      onSubmit = {async ( values, { resetForm, setSubmitting }) => {
        await signUp(values)
        resetForm()
        setSubmitting(false)
      }}
    >
      {({ values, isSubmitting, isValid }) => (
        <StyledForm>

          <AlignedWrapper>
            <Field name = "firstName" type = "text" component = {TextInput} label = "First Name" onClick = {() => setFocused("name")}/>
            <Field name = "lastName" type = "text" component = {TextInput} label = "Last Name" onClick = {() => setFocused("name")}/>
          </AlignedWrapper>

          <Field name = "username" type = "text" component = {TextInput} label = "Username"/>
          <Field name = "email" type = "email" component = {TextInput} label = "Email"/>
          <Field name = "phone" type = "text" component = {TextInput} label = "Phone"/>
          
          <AlignedWrapper>
            <Field name = "passwordOne" type = "password" component = {TextInput} label = "Password"/>
            <Field name = "passwordTwo" type = "password" component = {TextInput} label = "Confirm Password"/>
          </AlignedWrapper>

          <Cards
            number = {values.creditCard}
            name = {values.firstName + " " + values.lastName}
            expiry = {values.expDate}
            cvc ={values.secCode}
            focused = {focused}
          />

          <Field name = "creditCard" type = "text" component = {TextInput} label = "Card Number" onClick = {() => setFocused("number")}/>
          <AlignedWrapper>
            <Field name = "expDate" type = "text" component = {TextInput} label = "Expiration Date" onClick = {() => setFocused("expiry")}/>
            <Field name = "secCode" type = "text" component = {TextInput} label = "Security Code" onClick = {() => setFocused("cvc")}/>
          </AlignedWrapper>

          <Label> What apps do you have? </Label>
          <ul className = "checkbox-input">
            <li>
              <Field name = "apps[0]" type = "checkbox" id = "Postmates"/>
              <label for = "Postmates"> <img src = {postmates} /> </label>
            </li>

            <li>
              <Field name = "apps[1]" type = "checkbox" id = "GrubHub"/>
              <label for = "GrubHub"> <img src = {grubhub} /> </label>
            </li>

            <li>
              <Field name = "apps[2]" type = "checkbox" id = "DoorDash"/>
              <label for = "DoorDash"> <img src = {doordash} /> </label>
            </li>

            <li>
              <Field name = "apps[3]" type = "checkbox" id = "UberEats"/>
              <label for = "UberEats"> <img src = {ubereats} /> </label>
            </li>
          </ul>

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