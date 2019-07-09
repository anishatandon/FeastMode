import React from 'react';
import styled from 'styled-components'

import { LogInLink } from '../../../style/UI/Links.js'
import WizardForm from './WizardForm.js'
import Logo from '../../../style/Logo.js'
import { FormWrapper } from '../../../style/UI/FormWrappers.js'

const SignUpFormWrapper = styled(FormWrapper)`
  max-width: 60rem;
`

const SignUpPage = () => (
  <>
  <SignUpFormWrapper>
    <Logo />
    <WizardForm />
  </SignUpFormWrapper>

  <LogInLink />
  </>
)

export default SignUpPage
