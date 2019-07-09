import React from 'react'

import LogInForm from '../LogIn/index.js'
import { SignUpLink } from '../../../style/UI/Links.js'
import Logo from '../../../style/Logo.js'

import { FormWrapper } from '../../../style/UI/FormWrappers.js'
import Heading from '../../../style/UI/Heading.js'

const Landing = () => (
  <>
  <FormWrapper>
    <Logo />
    <Heading size = "h1"> Join the Feast! </Heading>
    <LogInForm />
  </FormWrapper>
  
  <SignUpLink />
  </>
)

export default Landing
