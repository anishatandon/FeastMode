import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import { SignUpSchemas } from './SignUpSchemas.js'

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
      bag.setTouched({})
      bag.setSubmitting(false)
      this.next(values)
      console.log("Next")
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
            {!isLastPage ? <h1> Sign Up! </h1> : <h1> Which apps do you have? </h1>} 
            <Form className = "classic-form">

              {React.cloneElement(activePage, { parentState: {...props} })}
              <div className = "button-area">

                {page > 0 && <button type = "button" className = "classic-button" onClick={this.previous}> Previous </button>}
                {!isLastPage && <button type = "submit" className = "classic-button"> Next </button>}
                {isLastPage && <button type = "submit" disabled = {props.isSubmitting} className = "classic-button"> Submit </button>}

              </div>

            </Form>
          </>
        )}
      />
    )
  }
}

export default Wizard