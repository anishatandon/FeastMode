import React, { useEffect } from 'react'
import * as actions from '../../backend/store/actions'
import { connect } from 'react-redux'

const VerifyEmail = ({ sendVerification, error, loading, cleanUp })=> {
    let displayError

    if (error) {
        displayError = {display: "block"}
    } else {
        displayError = {display: "none"}
    }

    useEffect(() => {
        return () => {
            cleanUp()
        }
    }, [cleanUp])

    return (
        <div className = "email-verification">
            <h1> You are not verified </h1>
            <p> Go to your email inbox, and please verify your email </p>
            <button onClick = {sendVerification} className = "classic-button"> Resend Email </button>
            <p style = {displayError}>{error}</p>
        </div>
    )
}

const mapStateToProps = ({ auth }) => ({
    loading: auth.verifyEmail.loading,
    error: auth.verifyEmail.error
})

const mapDispatchToProps = {
    sendVerification: actions.verifyEmail,
    cleanUp: actions.clean
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail)