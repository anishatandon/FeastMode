import React, { Component } from 'react'
import { Formik, ErrorMessage } from 'formik'
import styled from 'styled-components'

import { SignUpSchemas } from './SignUpSchemas.js'
import Heading from '../../../style/UI/Heading.js'
import { StyledForm } from '../../../style/UI/FormWrappers.js'
import Button from '../../../style/UI/Buttons.js'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

class Wizard extends Component {
  static Page = ({ children, parentState }) => {
    return children(parentState)
  }

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues,
    }
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
  }))

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
  }))

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props
    const { page } = this.state
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values, bag)
    } else {
      bag.setSubmitting(false)
      this.next(values)
    }
  }

  render() {
    const { children } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1

    return (
      <Formik
        initialValues = {values}
        enableReinitialize = {false}
        validationSchema = {SignUpSchemas[page]}
        onSubmit = {this.handleSubmit}
        render = {props => (
          <>
          <Heading size = "h1"> Welcome to FeastMode </Heading> 
          <StyledForm>

            {React.cloneElement(activePage, { parentState: {...props} })}

            <Wrapper>
              {page > 0 && <Button type = "button" color = {true} onClick={this.previous}> Previous </Button>}
              {!isLastPage && <Button type = "submit" disabled = {!props.isValid || props.isSubmitting}> Next </Button>}
              {isLastPage && <Button type = "submit" color = {props.isValid} disabled = {props.isSubmitting}> Submit </Button>}
            </Wrapper>

          </StyledForm>
          </>
        )}
      />
    )
  }
}

export default Wizard