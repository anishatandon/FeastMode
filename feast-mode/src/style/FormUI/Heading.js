import React from 'react'
import styled, { css } from 'styled-components'

const baseStyle = css`
  color: ${({ color }) =>
    color === 'white' ? 'var(--color-white)' : 'var(--color-title)'};
  margin-top: 0;
  text-align: center;
  letter-spacing: 0.5px;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0rem' : '2rem')};
`
const Heading1 = styled.h1`
  font-size: 3.5rem;
  font-weight: ${({ bold }) => (bold ? '700' : '500')};
  ${baseStyle}
`
const Heading2 = styled.h2`
  font-size: 2.5rem;
  ${baseStyle}
`
const Heading3 = styled.h3`
  font-size: 1.5rem;
  ${baseStyle}
`
const Heading4 = styled.h4`
  font-size: 1.3rem;
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  ${baseStyle}
`

const Heading = ({ children, color, noMargin, bold, size }) => {
  if (size === 'h1')
    return (
      <Heading1 noMargin = {noMargin} bold = {bold} color = {color}>
        {children}
      </Heading1>
    )

  if (size === 'h2')
    return (
      <Heading2 noMargin = {noMargin} bold = {bold} color = {color}>
        {children}
      </Heading2>
    )

  if (size === 'h3')
    return (
      <Heading3 noMargin = {noMargin} bold = {bold} color = {color}>
        {children}
      </Heading3>
    )

  if (size === 'h4')
    return (
      <Heading4 noMargin = {noMargin} bold = {bold} color = {color}>
        {children}
      </Heading4>
    )
}

export default Heading