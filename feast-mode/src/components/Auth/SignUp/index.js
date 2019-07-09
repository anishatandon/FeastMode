import React from 'react';

import { LogInLink } from '../../../style/UI/Links.js'
import WizardForm from './WizardForm.js'
import Logo from '../../../style/Logo.js'
import { FormWrapper } from '../../../style/UI/FormWrappers.js'

const SignUpPage = () => (
  <>
  <FormWrapper>
    <Logo />
    <WizardForm />
  </FormWrapper>

  <LogInLink />
  </>
)

export default SignUpPage
