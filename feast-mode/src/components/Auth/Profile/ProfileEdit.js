import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { ProfileEditSchema } from './ProfileSchemas.js'
import * as actions from '../../../backend/store/actions'

// App Logos
import postmates from '../../../images/postmates.jpg';
import doordash from '../../../images/doordash.jpg';
import grubhub from '../../../images/grubhub.png';
import ubereats from '../../../images/ubereats.jpeg';

// Style
import styled from 'styled-components'
import { StyledForm } from '../../../style/UI/FormWrappers.js'
import { TextInput } from '../../../style/UI/Inputs.js'
import Button from '../../../style/UI/Buttons.js'
import { FormWrapper } from '../../../style/UI/FormWrappers.js'
import { ProfileDeleteLink } from '../../../style/UI/Links.js'
import { Message, MessageWrapper } from '../../../style/UI/Message.js'

const SignUpFormWrapper = styled(FormWrapper)`
  max-width: 60rem;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
// import ImageUpload from './ImageUpload.js';

const ProfileEdit = ({ firebase, error, loading, cleanUp, editProfile }) => {
    useEffect(() => {
        return () => {
            cleanUp()
        }
    }, [cleanUp])

    if (!firebase.profile.isLoaded) return null

    let displayError
    if (error) {
        displayError = { display: "block" }
    } else {
        displayError = { display: "none" }
    }

    return (
        <SignUpFormWrapper>
            <h1> Edit Your Profile </h1>
            {/* <ImageUpload /> */}
            <br />
            <Formik
                initialValues={{
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
                validationSchema={ProfileEditSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    await editProfile(values)
                    setSubmitting(false)
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <StyledForm>
                        {/* <div className = "compensate-input text-input"> 
                            <label> Profile Picture </label> <br />
                            <Field name = "picture" type = "file"/> <br/>
                        </div> */}
                        <Wrapper>
                            <Field name="firstName" type="text" aligned="true" component={TextInput} />
                            <Field name="lastName" type="text" aligned="true" component={TextInput} />
                        </Wrapper>
                        <Field name="username" type="text" component={TextInput} />
                        <Field name="email" type="email" component={TextInput} />
                        <Field name="phone" type="text" component={TextInput} />
                        <Wrapper>
                            <Field name="passwordOne" type="password" aligned="true" component={TextInput} />
                            <Field name="passwordTwo" type="password" aligned="true" component={TextInput} />
                        </Wrapper>
                        <Field name="creditCard" type="text" component={TextInput} />
                        <Wrapper>
                            <Field name="expDate" type="text" aligned="true" component={TextInput} />
                            <Field name="secCode" type="text" aligned="true" component={TextInput} />
                        </Wrapper>
                        <Wrapper>
                            {/* <ul className = "checkbox-input">
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
                            </ul> */}
                        </Wrapper>
                        <ErrorMessage render = {msg => <p className = "error-msg"> {msg} </p>} name = "apps" />

                        <Button disabled={isSubmitting} type="submit">Edit</Button>
                    
                        <MessageWrapper>
                            <Message error show = {error}>{ error }</Message>
                        </MessageWrapper>
                    
                    </StyledForm>
                )}
            </Formik>
            <ProfileDeleteLink />
        </SignUpFormWrapper>
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