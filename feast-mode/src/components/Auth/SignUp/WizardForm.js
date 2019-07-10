import React, { useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';
import Wizard from './SignUpForm.js/index.js'
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { TextInput } from '../../../style/UI/Inputs.js'

import postmates from '../../../images/postmates.jpg';
import doordash from '../../../images/doordash.jpg'
import grubhub from '../../../images/grubhub.png';
import ubereats from '../../../images/ubereats.jpeg';

const AlignedWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const WizardForm = ({ signUp, cleanUp, error, loading }) => {
    useEffect(() => {
        return () => {
            cleanUp()
        }
    }, [cleanUp])
    return (
        <Wizard
            initialValues = {{
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                phone: "",
                passwordOne: "",
                passwordTwo: "",
                creditCard: "",
                expDate: "",
                secCode: "",
                creditCardType: "",
                apps: [false, false, false, false], // Postamtes, GrubHub, DoorDash, UberEats
                picture: "", // some random picture, we can set a default one later
            }}
            onSubmit = {async ( values, { resetForm, setSubmitting }) => {
                await signUp(values)
                resetForm()
                setSubmitting(false)
            }}
        >
            <Wizard.Page>
                {props => (
                    <>
                    <Wrapper>
                        <Field name = "firstName" type = "text" aligned = "true" component = {TextInput}/>
                        <Field name = "lastName" type = "text" aligned = "true" component = {TextInput}/>
                    </Wrapper>
                    <Field name = "username" type = "text" component = {TextInput}/>
                    <Field name = "email" type = "email" component = {TextInput}/>
                    <Field name = "phone" type = "text" component = {TextInput}/>
                    <Wrapper>
                        <Field name = "passwordOne" type = "password" aligned = "true" component = {TextInput}/>
                        <Field name = "passwordTwo" type = "password" aligned = "true" component = {TextInput}/>
                    </Wrapper>
                    </>
                )}
            </Wizard.Page>
            <Wizard.Page>
                {props => (
                    <>
                    
                    <Field name = "creditCard" type = "text" component = {TextInput}/>
                    <Wrapper>
                        <Field name = "expDate" type = "text" aligned = "true" component = {TextInput}/>
                        <Field name = "secCode" type = "text" aligned = "true" component = {TextInput}/>
                    </Wrapper>
                        <div className = "select-input">
                            <label> Card Type: </label>
                            <Field component = "select" name = "creditCardType">
                                <option value = "" label = "Select one" />
                                <option value = "amex" label = "American Express" />
                                <option value = "visa" label = "Visa" />
                                <option value = "mastercard" label = "Mastercard" />
                            </Field>
                            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "creditCardType" />
                        </div>
                    </>
                )}
            </Wizard.Page>
            <Wizard.Page>
                {props => (
                    <>
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
                        <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "apps" />
                    </>
                )}
            </Wizard.Page>
        </Wizard>
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

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm)