import React from 'react';
import styled from 'styled-components'

import { LogInLink } from '../../../style/FormUI/Links.js'
import SignUpForm from './SignUpForm.js'
import Logo from '../../../style/Logo.js'
import { FormWrapper } from '../../../style/FormUI/FormWrappers.js'
import Heading from '../../../style/FormUI/Heading.js'

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
