import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { ProfileEditSchema } from './ProfileSchemas.js'
import * as actions from '../../../backend/store/actions'
import ProfileDeleteLink from './ProfileDelete'

import postmates from '../../../images/postmates.jpg';
import doordash from '../../../images/doordash.jpg';
import grubhub from '../../../images/grubhub.png';
import ubereats from '../../../images/ubereats.jpeg';

import ImageUpload from './ImageUpload.js';

const ProfileEdit = ({ firebase, error, loading, cleanUp, editProfile }) => {
    useEffect(() => {
        return () => {
        cleanUp()
        }
    }, [cleanUp])

    if (!firebase.profile.isLoaded) return null

    let displayError
    if (error) {
        displayError = {display: "block"}
    } else {
        displayError = {display: "none"}
    }

    return (
        <div className = "profile-change">
            <h1> Edit Your Profile </h1>
            {/* <ImageUpload /> */}
            <br />
            <Formik
                initialValues = {{
                    firstName: firebase.profile.firstName,
                    lastName: firebase.profile.lastName,
                    username: firebase.profile.username,
                    email: firebase.auth.email,
                    phone: firebase.profile.phone,
                    passwordOne: "",
                    passwordTwo: "",
                    creditCard: firebase.profile.creditCard,
                    expDate: firebase.profile.expDate,
                    secCode: firebase.profile.secCode,
                    creditCardType: firebase.profile.creditCardType,
                    apps: firebase.profile.apps, // Postmates, GrubHub, DoorDash, UberEats
                    picture: firebase.profile.picture, // initial picture, the default one given at signup
                }}
                validationSchema = {ProfileEditSchema}
                onSubmit = {async ( values, { resetForm, setSubmitting }) => {
                    await editProfile(values)
                    setSubmitting(false)
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form className = "classic-form">
                        <div className = "compensate-input text-input"> 
                            <label> Profile Picture </label> <br />
                            <Field name = "picture" type = "text"/> <br/>
                        </div>
                        <div className = "aligned-inputs text-input"> 
                            <div className = {touched.firstName && errors.firstName && "text-error"}>
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

                        <div className = "aligned-inputs text-input"> 
                            <div className = {touched.passwordOne && errors.passwordOne && "text-error"}>
                                <label> Password </label> <br />
                                <Field name = "passwordOne" type = "password"/> <br/>
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "passwordOne" />
                            </div>
                            
                            <div className = {touched.passwordTwo && errors.passwordTwo && "text-error"}>
                                <label> Confirm Password </label> <br />
                                <Field name = "passwordTwo" type = "password"/> <br/>
                                <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "passwordTwo" />
                            </div>
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
                                <Field name = "apps[0]" type = "checkbox" id = "Postmates" checked = {values.apps[0]}/>
                                <label for = "Postmates"> <img src = {postmates} /> </label>
                            </li>

                            <li>
                                <Field name = "apps[1]" type = "checkbox" id = "GrubHub" checked = {values.apps[1]}/>
                                <label for = "GrubHub"> <img src = {grubhub} /> </label>
                            </li>

                            <li>
                                <Field name = "apps[2]" type = "checkbox" id = "DoorDash" checked = {values.apps[2]}/>
                                <label for = "DoorDash"> <img src = {doordash} /> </label>
                            </li>

                            <li>
                                <Field name = "apps[3]" type = "checkbox" id = "UberEats" checked = {values.apps[3]}/>
                                <label for = "UberEats"> <img src = {ubereats} /> </label>
                            </li>
                        </ul>
                        <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "apps" />

                        <p style = {displayError}>{error}</p>
                        <button type = "submit" disabled = {isSubmitting} className = "classic-button"> Edit </button>

                    </Form>
                )}
            </Formik>
            <div className = "link-area">
                <ProfileDeleteLink />
            </div>
        </div>
    )
}

const mapStateToProps = ({ firebase, auth }) => ({
    firebase,
    loading: auth.profileEdit.loading,
    error: auth.profileEdit.error
})

const mapDispatchToProps = {
    editProfile: actions.editProfile,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)