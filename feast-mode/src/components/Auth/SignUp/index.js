import React from 'react';
import styled from 'styled-components'

import { LogInLink } from '../../../style/UI/Links.js'
import SignUpForm from './SignUpForm.js'
import Logo from '../../../style/Logo.js'
import { FormWrapper } from '../../../style/UI/FormWrappers.js'
import Heading from '../../../style/UI/Heading.js'

const SignUpFormWrapper = styled(FormWrapper)`
  max-width: 60rem;
`

const SignUp = () => (
  <> 
  <LogInLink />

  <SignUpFormWrapper>
    <Logo />
    <Heading size = "h1"> Welcome to FeastMode </Heading> 
    <SignUpForm />
  </SignUpFormWrapper>
  </>
)

export default SignUp
