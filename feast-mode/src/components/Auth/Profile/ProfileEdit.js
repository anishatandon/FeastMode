import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import styled from 'styled-components'
import * as actions from '../../../backend/store/actions'
import FileUploader from "react-firebase-file-uploader";

// Components
import { ProfileEditSchema } from './ProfileSchemas.js'
import { ProfileDeleteLink } from '../../../style/FormUI/Links.js'

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
import { FormWrapper } from '../../../style/FormUI/FormWrappers.js'
import { Message, MessageWrapper } from '../../../style/FormUI/Message.js'

const EditProfileWrapper = styled(FormWrapper)`
    max-width: 60rem;
`
const CoverWrapper = styled.div`
    width: 100%
`
const Cover = styled.div`
    font-size: 2rem;
    width: 100%;
    height: 7rem;
    border: 1px solid var(--color-border);
    ${CoverWrapper} {
        display: none;
    }
`
const ProfileEdit = ({ firebase, error, loading, cleanUp, editProfile }) => {
    // INTRODUCING STATE STUFF /////////////////////////////
    const [avatar, setAvatar] = useState("");
    const [avatarURL, setAvatarURL] = useState("");
    ////////////////////////////////////////////////////////

    // useEffect(() => {
    //     function handleUploadSuccess(filename) {
    //         setAvatar(filename);
    //         setIsUploading(false);
    //         firebase
    //             .storage()
    //             .ref("images")
    //             .child(filename)
    //             .getDownloadURL()
    //             .then(url => setAvatarURL(url));
    //     }
    // });
    const handleUploadSuccess = filename => {
        setAvatar(filename);
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => setAvatarURL(url));
    }

    useEffect(() => {
        return () => {
            cleanUp()
        }
    }, [cleanUp]);

    if (!firebase.profile.isLoaded) return null

    return (
        <EditProfileWrapper>
            <Heading size="h1"> Edit Your Profile </Heading>
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

                    // new shit
                    file: avatar,
                    url: avatarURL,
                }}
                validationSchema={ProfileEditSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    await editProfile(values)
                    resetForm()
                    setSubmitting(false)
                }}
            >
                {({ values, isValid, isSubmitting }) => (
                    <StyledForm>
                        <p> meep</p>
                        <div className="compensate-input text-input">

                            <label >Profile Picture</label>
                            {avatarURL && <img src={avatarURL} />}
                            <FileUploader
                                accept="image/*"
                                name="avatar"
                                randomizeFilename
                                storageRef={firebase.storage().ref("images")}
                                onUploadSuccess={handleUploadSuccess}
                            />
                            {/* <Field name = "picture" type = "file"/> <br/> */}
                        </div>
                        <Cover text="Personal information"> <CoverWrapper>
                            <p> meep</p>
                            <AlignedWrapper>
                                <Field name="firstName" type="text" component={TextInput} label="First Name" />
                                <Field name="lastName" type="text" component={TextInput} label="Last Name" />
                            </AlignedWrapper>

                            <Field name="username" type="text" component={TextInput} label="Username" />
                            <Field name="email" type="email" component={TextInput} label="Email" />
                            <Field name="phone" type="text" component={TextInput} label="Phone" />

                            <AlignedWrapper>
                                <Field name="passwordOne" type="password" component={TextInput} label="Password" />
                                <Field name="passwordTwo" type="password" component={TextInput} label="Confirm Password" />
                            </AlignedWrapper>
                        </CoverWrapper> </Cover>

                        <Field name="creditCard" type="text" component={TextInput} label="Card Number" />
                        <AlignedWrapper>
                            <Field name="expDate" type="text" component={TextInput} label="Expiration Date" />
                            <Field name="secCode" type="text" component={TextInput} label="Security Code" />
                        </AlignedWrapper>

                        <Label> What apps do you have? </Label>
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

                        <Button
                            disabled={!isValid || isSubmitting}
                            loading={loading ? 'Making changes...' : null}
                            type="submit"
                        >
                            Edit Profile
                        </Button>

                        <MessageWrapper>
                            <Message error show={error}>{error}</Message>
                        </MessageWrapper>
                        <MessageWrapper>
                            <Message success show={error === false}> Profile changed successfully </Message>
                        </MessageWrapper>
                    </StyledForm>
                )}
            </Formik>
            {/* <ProfileDeleteLink /> */}
        </EditProfileWrapper>
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