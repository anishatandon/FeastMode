import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const LinkText = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: var(--color-title);
    padding-top: 1rem;
`
const UnderLink = styled(NavLink)`
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    color: var(--color-title);
    font-weight: 700;
    transition: all 0.2s;

    :hover {
    border-bottom: 2px solid var(--color-main);
    }
`
const PasswordLink = styled(UnderLink)`
    font-size: 1.1rem;
    text-transform: capitalize;
    color: grey;
    margin-top: 8rem;
    position: absolute;
    display: flex;
    align-items: flex-end;
`

export const SignUpLink = () => (
    <LinkText>
        <span> New to FeastMode? </span>
        <UnderLink to = {ROUTES.SIGN_UP}> Sign Up </UnderLink>
    </LinkText>
)

export const ForgotPasswordLink= () => (
    <PasswordLink to = {ROUTES.PASSWORD_RECOVERY}> Forgot password </PasswordLink>
)

export const LogInLink = () => (
    <LinkText>
        <span> Already have an account? </span>
        <UnderLink to = {ROUTES.LANDING}> Log In </UnderLink>
    </LinkText>
)
  