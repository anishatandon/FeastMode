import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import ProfileChangeSchema from './ProfileSchemas.js'

import postmates from '../../images/postmates.jpg';
import doordash from '../../images/doordash.jpg';
import grubhub from '../../images/grubhub.png';
import ubereats from '../../images/ubereats.jpeg';

const ProfileChange = () => {
    let displayError

    // if (error) {
    //     displayError = {display: "block"}
    // } else {
    //     displayError = {display: "none"}
    // }

    return (
        <div className = "profile-change">
            <h1> Profile Change </h1>
            <Formik
                initialValues = {{
                    email: "",
                    password: "",
                }}
                validationSchema = {ProfileChangeSchema}
                onSubmit = {async ( values, { resetForm, setSubmitting }) => {
                    console.log(values)
                    resetForm()
                    setSubmitting(false)
                }}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className = "classic-form">
                        
                        <div className = "aligned-inputs text-input"> 
                            <div cla>
                                <label> First Name </label> <br />
                                <Field name = "firstName" type = "text"/> <br />
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "firstName" />
                            </div>

                            <div>
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
                        
                        <div className = "compensate-input text-input"> 
                            <label> Email </label> <br />
                            <Field name = "email" type = "email"/> <br/>
                            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "email" />
                        </div>
                        
                        <div className = "compensate-input text-input">
                            <label> Phone Number </label> <br />
                            <Field name = "phone" type = "text"/> <br/>
                            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "phone" />
                        </div>

                        <div className = "compensate-input text-input">
                            <label> Credit Card </label> <br />
                            <Field name = "creditCard" type = "text"/> <br />
                            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "creditCard" />
                        </div>

                        <div className = "aligned-inputs text-input"> 
                            <div>
                                <label> Expiration Date </label> <br />
                                <Field name = "expDate" type = "text" placeholder="MMYY"/> <br/>
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "expDate" />
                            </div>
                            
                            <div>
                                <label> Security Code </label> <br />
                                <Field name = "secCode" type = "text"/> <br/>
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "secCode" />
                            </div>
                        </div>
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

                        {/* <p style = {displayError}>{error}</p> */}
                        <button type = "submit" disabled = {isSubmitting} className = "classic-button"> Change </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProfileChange