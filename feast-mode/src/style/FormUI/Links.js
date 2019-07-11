import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const LinkText = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: var(--color-title);
    padding-top: ${props => props.top ? "0rem" : "1rem"};
    padding-bottom: ${props => props.top ? "1rem" : "0rem"};
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
const DeleteLink = styled(UnderLink)`
    text-transform: capitalize;
`
const PasswordLink = styled(UnderLink)`
    font-size: 1.1rem;
    border-bottom: 1px solid transparent;
    text-transform: capitalize;
    font-weight: 400;
    margin-top: 8rem;
    position: absolute;
    display: flex;
    align-items: flex-end;

    :hover {
        border-bottom: 1px solid var(--color-main);
        }
`

export const SignUpLink = () => (
    <LinkText top = {false}>
        <span> New to FeastMode? </span>
        <UnderLink to = {ROUTES.SIGN_UP}> Sign Up </UnderLink>
    </LinkText>
)

export const ForgotPasswordLink= () => (
    <PasswordLink to = {ROUTES.PASSWORD_RESET}> Forgot password </PasswordLink>
)

export const LogInLink = () => (
    <LinkText top = {true}>
        <span> Already have an account? </span>
        <UnderLink to = {ROUTES.LANDING}> Log In </UnderLink>
    </LinkText>
)
  
export const ProfileDeleteLink = () => (
    <LinkText>
        <span> No longer want FeastMode? </span>
        <DeleteLink to = {ROUTES.HOME}> Delete Profile </DeleteLink>
    </LinkText>
)