import React, { useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';
import Wizard from './Wizard.js'
import * as actions from '../../backend/store/actions'
import { connect } from 'react-redux'

import postmates from '../../images/postmates.jpg';
import doordash from '../../images/doordash.jpg';
import grubhub from '../../images/grubhub.png';
import ubereats from '../../images/ubereats.jpeg';

const WizardForm = ({ signUp, loading, error, cleanUp }) => {
    console.log(error) // remove this when you get error to show
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
            }}
            onSubmit = {async ( values, { resetForm, setSubmitting }) => {
                await signUp(values)
                resetForm()
                setSubmitting(false)
                console.log("Submitted")
            }}
        >
            <Wizard.Page>
                {props => (
                    <React.Fragment>
                        <div className = "aligned-inputs text-input"> 
                            <div className = {props.touched.firstName && props.errors.firstName && "text-error"}>
                                <label> First Name </label> <br />
                                <Field name = "firstName" type = "text"/> <br />
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "firstName" />
                            </div>

                            <div className = {props.touched.lastName && props.errors.lastName &&"text-error"}>
                                <label> Last Name </label> <br />
                                <Field name = "lastName" type = "text"/> <br/>
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "lastName" />
                            </div>
                        </div>

                        <div className = {["compensate-input text-input", props.touched.username && props.errors.username && "text-error"].join(' ')}>
                            <label> Username </label> <br />
                            <Field name = "username" type = "text"/> <br/>
                            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "username" />
                        </div>
                        
                        <div className = {["compensate-input text-input", props.touched.email && props.errors.email && "text-error"].join(' ')}> 
                            <label> Email </label> <br />
                            <Field name = "email" type = "email"/> <br/>
                            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "email" />
                        </div>
                        
                        <div className = {["compensate-input text-input", props.touched.phone && props.errors.phone && "text-error"].join(' ')}>
                            <label> Phone Number </label> <br />
                            <Field name = "phone" type = "text"/> <br/>
                            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "phone" />
                        </div>
                        
                        <div className = "aligned-inputs text-input"> 
                            <div className = {props.touched.passwordOne && props.errors.passwordOne && "text-error"}>
                                <label> Password </label> <br />
                                <Field name = "passwordOne" type = "password"/> <br/>
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "passwordOne" />
                            </div>
                            
                            <div className = {props.touched.passwordTwo && props.errors.passwordTwo && "text-error"}>
                                <label> Confirm Password </label> <br />
                                <Field name = "passwordTwo" type = "password"/> <br/>
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "passwordTwo" />
                            </div>
                        </div>
                    </React.Fragment>
                )}
                {/* <p>{error}</p> Conditional rendering of the paragraph with styled components */}
            </Wizard.Page>
            <Wizard.Page>
                {props => (
                    <React.Fragment>
                        <div className = {["compensate-input text-input", props.touched.creditCard && props.errors.creditCard && "text-error"].join(' ')}>
                            <label> Credit Card </label> <br />
                            <Field name = "creditCard" type = "text"/> <br />
                            <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "creditCard" />
                        </div>

                        <div className = "aligned-inputs text-input"> 
                            <div className = {props.touched.expDate && props.errors.expDate && "text-error"}>
                                <label> Expiration Date </label> <br />
                                <Field name = "expDate" type = "text" placeholder="MMYY"/> <br/>
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "expDate" />
                            </div>
                            
                            <div className = {props.touched.secCode && props.errors.secCode && "text-error"}>
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
                    </React.Fragment>
                )}
                {/* <p>{error}</p> Conditional rendering of the paragraph with styled components */}
            </Wizard.Page>
            <Wizard.Page>
                {props => (
                    <React.Fragment>
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
                    </React.Fragment>
                )}
                {/* <p>{error}</p> Conditional rendering of the paragraph with styled components */}
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