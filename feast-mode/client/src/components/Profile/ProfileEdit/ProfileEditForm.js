import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import * as actions from '../../../backend/store/actions'
import Cards from 'react-credit-cards'
import styled from 'styled-components'

// Components
import { ProfileEditSchema } from '../ProfileSchemas.js'
import Dropdown from './Dropdown.js'

// Images
import postmates from '../../../images/postmates.jpg';
import doordash from '../../../images/doordash.jpg';
import grubhub from '../../../images/grubhub.png';
import ubereats from '../../../images/ubereats.jpeg';

// Style
import { StyledForm, AlignedWrapper } from '../../../style/FormUI/FormWrappers.js'
import { TextInput, Label } from '../../../style/FormUI/Inputs.js'
import Button from '../../../style/FormUI/Buttons.js'
import Heading from '../../../style/FormUI/Heading.js'
import { Message, MessageWrapper } from '../../../style/FormUI/Message.js'

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.theme.mediaQueries.small ? "column" : "row"};
    align-items: center;
`

const ProfileEditForm = ({ firebase, error, loading, cleanUp, editProfile }) => {
    const [focused, setFocused] = useState("")

    useEffect(() => {
        return () => {
            cleanUp()
        }
    }, [cleanUp])

    if (!firebase.profile.isLoaded) return null

    return (
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
                apps: firebase.profile.apps,
            }}
            validationSchema = {ProfileEditSchema}
            onSubmit = {async (values, { resetForm, setSubmitting }) => {
                await editProfile(values)
                resetForm()
                setSubmitting(false)
            }}
        >
            {({ values, isValid, isSubmitting }) => (
                <StyledForm>
                    <Heading noMargin left bold size = "h3"> Personal Information </Heading>
                        <AlignedWrapper>
                            <Field name = "firstName" type = "text" component = {TextInput} label = "First Name"/>
                            <Field name = "lastName" type = "text" component = {TextInput} label = "Last Name"/>
                        </AlignedWrapper>

                        <Field name = "username" type = "text" component = {TextInput} label = "Username"/>
                        <Field name = "email" type = "email" component = {TextInput} label = "Email"/>
                        <Field name = "phone" type = "text" component = {TextInput} label = "Phone"/>
                        
                        <AlignedWrapper>
                            <Field name = "passwordOne" type = "password" component = {TextInput} label = "Password"/>
                            <Field name = "passwordTwo" type = "password" component = {TextInput} label = "Confirm Password"/>
                        </AlignedWrapper>

                    <Dropdown title = "Credit Card Information">
                        <Cards
                            number={values.creditCard}
                            name={values.firstName + " " + values.lastName}
                            expiry={values.expDate}
                            cvc={values.secCode}
                            focused={focused}
                        />
                        <Field name = "creditCard" type = "text" component = {TextInput} label = "Card Number" onClick = {() => setFocused("number")}/>
                        <AlignedWrapper>
                            <Field name = "expDate" type = "text" component = {TextInput} label = "Expiration Date" onClick = {() => setFocused("expiry")}/>
                            <Field name = "secCode" type = "text" component = {TextInput} label = "Security Code" onClick = {() => setFocused("cvc")}/>
                        </AlignedWrapper>
                    </Dropdown>

                    <Dropdown title = "Apps">
                        <Label> What apps do you have? </Label>
                        <Wrapper>
                            <ul className = "checkbox-input">
                                <li>
                                <Field name = "apps.postmates" type = "checkbox" id = "Postmates" checked = {values.apps.postmates}/>
                                <label for = "Postmates"> <img src = {postmates} alt = "Postmates"/> </label>
                                </li>

                                <li>
                                <Field name = "apps.grubhub" type = "checkbox" id = "GrubHub" checked = {values.apps.grubhub}/>
                                <label for = "GrubHub"> <img src = {grubhub} alt = "GrubHub"/> </label>
                                </li>

                                <li>
                                <Field name = "apps.doordash" type = "checkbox" id = "DoorDash" checked = {values.apps.doordash}/>
                                <label for = "DoorDash"> <img src = {doordash} alt = "DoorDash"/> </label>
                                </li>

                                <li>
                                <Field name = "apps.ubereats" type = "checkbox" id = "UberEats" checked = {values.apps.ubereats}/>
                                <label for = "UberEats"> <img src = {ubereats} alt = "UberEats"/> </label>
                                </li>
                            </ul>
                        </Wrapper>
                    </Dropdown>

                    <Button
                        disabled = { !isValid || isSubmitting}
                        loading = {loading ? 'Making changes...' : null}
                        type = "submit"
                    > 
                        Edit Profile 
                    </Button>
                
                    <MessageWrapper>
                        <Message error show = {error}>{ error }</Message>
                    </MessageWrapper>
                    <MessageWrapper>
                        <Message success show = {error === false}> Profile changed successfully </Message>
                    </MessageWrapper>
                </StyledForm>
            )}
        </Formik>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm)