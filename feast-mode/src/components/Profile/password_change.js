import React, { useEffect } from 'react'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import * as actions from '../../backend/store/actions'

const PasswordChangeSchema = yup.object().shape({
  email: yup.string("Must be a valid email").email("Must be a valid email").required("Please enter your email"),
})

const PasswordChangeForm = ({ sendEmail, loading, error, cleanUp }) => {

  return(
    <Formik
      initialValues = {{
        email: "",
      }}
      validationSchema = {PasswordChangeSchema}
      onSubmit = {async ( values, { resetForm, setSubmitting }) => {
        sendEmail(values)
        console.log("send email to recover");
        setSubmitting(false);
      }}
    >
        
        {({ errors, touched, isSubmitting }) => (
            <div className="password-change-form">
                <h2>Recover your password</h2>
                <Form className = "classic-form">
            
                <div className = {["text-input", touched.email && errors.email && "text-error"].join(' ')}> 
                    <label> Email </label> <br />
                    <Field 
                        name = "email" 
                        type = "email"
                        placeholder="Your email..."
                    /> 
                    <br/>
                    
                    <ErrorMessage 
                        render = {msg => <p className = "error-msg"> {msg} </p>} 
                        name = "email" 
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    loading={loading ? 'Sending recovery email...' : null }
                    className = "classic-button"> 
                        Send Recover Email 
                </button>
            </Form>
        </div>
        )}
    </Formik>
  )
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error,
})

const mapDispatchToProps = {
  sendEmail: actions.recoverPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeForm)



// import React, { Component } from 'react';

// import { withFirebase } from '../../backend/Firebase'

// const INITIAL_STATE = {
//   passwordOne: '',
//   passwordTwo: '',
//   error: null,
// };

// class PasswordChangeForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };
//   }

//   onSubmit = event => {
//     const { passwordOne } = this.state;

//     this.props.firebase
//       .doPasswordUpdate(passwordOne)
//       .then(() => {
//         this.setState({ ...INITIAL_STATE });
//       })
//       .catch(error => {
//         this.setState({ error });
//       });

//     event.preventDefault();
//   };

//   onChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   render() {
//     const { passwordOne, passwordTwo, error } = this.state;

//     const isInvalid =
//       passwordOne !== passwordTwo || passwordOne === '';

//     return (
//       <form onSubmit={this.onSubmit}>
//         <input
//           name="passwordOne"
//           value={passwordOne}
//           onChange={this.onChange}
//           type="password"
//           placeholder="New Password"
//         />
//         <input
//           name="passwordTwo"
//           value={passwordTwo}
//           onChange={this.onChange}
//           type="password"
//           placeholder="Confirm New Password"
//         />
//         <button disabled={isInvalid} type="submit">
//           Reset My Password
//         </button>

//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }

// export default withFirebase(PasswordChangeForm);
