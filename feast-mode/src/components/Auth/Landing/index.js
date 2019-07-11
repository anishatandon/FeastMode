import React from 'react'

import LogInForm from '../LogIn/index.js'
import { SignUpLink } from '../../../style/FormUI/Links.js'
import Logo from '../../../style/Logo.js'

import { FormWrapper } from '../../../style/FormUI/FormWrappers.js'
import Heading from '../../../style/FormUI/Heading.js'

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
