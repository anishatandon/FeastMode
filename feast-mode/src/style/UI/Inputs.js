import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 3rem;
  flex-direction: column;
`
const Error = styled.p`
  color: var(--color-main);
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '23px' : '10px')});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 0.7rem;
  font-weight: 400;
  font-size: 1.3rem;
`
export const Label = styled.label`
  font-size: 1.3rem;
  width: 100%;
  padding: 0.7rem;
  color: var(--color-title);
`

const StyledTextInput = styled.input`
  padding: 1.2rem 2rem;
  width: 100%;
  background-color: #F4F6F6;
  color: var(--color-title);
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 1.3rem;
  border-radius: 1rem;
  border: 1px solid transparent;
  transition: all 0.5s;

  &:hover {
    border: 1px solid var(--color-main);
  }

  &:focus {
    border-bottom: 1px solid var(--color-main);
    background-color: #eef1f1;
  }
`

export const TextInput = ({ label, field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <Label> {label} </Label>
      <StyledTextInput {...field} {...props} />
      <Error show = {errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  )
}