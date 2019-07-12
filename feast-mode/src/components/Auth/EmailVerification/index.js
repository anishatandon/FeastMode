import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as actions from '../../../backend/store/actions'

import { FormWrapper, StyledForm } from '../../../style/FormUI/FormWrappers.js'
import Heading from '../../../style/FormUI/Heading.js'
import Button from '../../../style/FormUI/Buttons.js'
import { Message, MessageWrapper } from '../../../style/FormUI/Message.js'

const VerifyEmailWrapper = styled(FormWrapper)`
    margin-top: 4rem;
`;

const VerifyEmail = ({ sendVerification, error, loading, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <VerifyEmailWrapper>
        <Heading noMargin bold size = "h2"> Verify your email </Heading>
        <Heading size = "h4"> Go to your email inbox, and please verify your email. </Heading>
        <StyledForm>
            <Button
                loading={loading ? 'Sending email...' : null}
                disabled={loading}
                onClick={() => sendVerification()}
            >
                Re-send verification email
            </Button>
            <MessageWrapper>
                <Message error show = {error}>{ error }</Message>
            </MessageWrapper>
            <MessageWrapper>
                <Message success show = {error === false}> Email sent successfully! </Message>
            </MessageWrapper>
        </StyledForm>
    </VerifyEmailWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
  cleanUp: actions.clean,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);