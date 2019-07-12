import React, { useEffect, useState } from 'react'
import { Field, Formik } from 'formik'
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux'
import Cards from 'react-credit-cards'
import styled from 'styled-components'

import { SignUpSchema } from './SignUpSchema.js'
import { StyledForm, AlignedWrapper } from '../../../style/FormUI/FormWrappers.js'
import Button from '../../../style/FormUI/Buttons.js'
import { TextInput, Label } from '../../../style/FormUI/Inputs.js'
import { Message, MessageWrapper } from '../../../style/FormUI/Message.js'
import { getCreditCardType } from '../CreditCard.js'

import postmates from '../../../images/postmates.jpg';
import doordash from '../../../images/doordash.jpg'
import grubhub from '../../../images/grubhub.png';
import ubereats from '../../../images/ubereats.jpeg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.theme.mediaQueries.small ? "column" : "row"};
  align-items: center;
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
      initialValues={{
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
        apps: { postmates: false, grubhub: false, doordash: false, ubereats: false },
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await signUp(values)
        setSubmitting(false)
      }}
    >
      {({ values, isSubmitting, isValid }) => (
        <StyledForm>

          <AlignedWrapper>
            <Field name="firstName" type="text" required component={TextInput} label="First Name" onClick={() => setFocused("name")} />
            <Field name="lastName" type="text" required component={TextInput} label="Last Name" onClick={() => setFocused("name")} />
          </AlignedWrapper>

          <Field name="username" type="text" required component={TextInput} label="Username" />
          <Field name="email" type="email" required component={TextInput} label="Email" />
          <Field name="phone" type="text" required component={TextInput} label="Phone" />

          <AlignedWrapper>
            <Field name="passwordOne" type="password" required component={TextInput} label="Password" />
            <Field name="passwordTwo" type="password" required component={TextInput} label="Confirm Password" />
          </AlignedWrapper>

          <Cards
            number={values.creditCard}
            name={values.firstName + " " + values.lastName}
            expiry={values.expDate}
            cvc={values.secCode}
            focused={focused}
          />

          <Field name="creditCard" type="text" required component={TextInput} label="Card Number" onClick={() => setFocused("number")} />
          <AlignedWrapper>
            <Field name="expDate" type="text" required component={TextInput} label="Expiration Date" onClick={() => setFocused("expiry")} />
            <Field name="secCode" type="text" required component={TextInput} label="Security Code" onClick={() => setFocused("cvc")} />
          </AlignedWrapper>

          <Label> What apps do you have? </Label>
          <Wrapper>
            <ul className="checkbox-input">
              <li>
                <Field name="apps.postmates" type="checkbox" id="Postmates" />
                <label for="Postmates"> <img src={postmates} /> </label>
              </li>

              <li>
                <Field name="apps.grubhub" type="checkbox" id="GrubHub" />
                <label for="GrubHub"> <img src={grubhub} /> </label>
              </li>

              <li>
                <Field name="apps.doordash" type="checkbox" id="DoorDash" />
                <label for="DoorDash"> <img src={doordash} /> </label>
              </li>

              <li>
                <Field name="apps.ubereats" type="checkbox" id="UberEats" />
                <label for="UberEats"> <img src={ubereats} /> </label>
              </li>
            </ul>
          </Wrapper>

          <Button
            disabled={!isValid || isSubmitting}
            loading={loading ? 'Creating account...' : null}
            type="submit"
          >
            Sign Up
          </Button>

          <MessageWrapper>
            <Message error show={error}>{error}</Message>
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