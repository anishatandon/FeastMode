import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  font-size: 1.3rem;
  color: ${({ error, success }) => {
    if (error) return 'var(--color-main)'
    if (success) return 'var(--color-title)'
    else return 'red'
  }};
  opacity: ${({ show }) => (show ? '1' : '0')};
  visibility: ${({ show }) => (show ? 'visibile' : 'hidden')};
  text-align: center;
  transition: all 0.2s;
`
export const MessageWrapper = styled.div`
  position: absolute;
  bottom: -3rem;
`

export const Message = ({ children, error, success, show }) => {
  return (
    <P error = {error} success = {success} show = {show}>
      {children}
    </P>
  )
}