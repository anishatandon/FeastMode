import * as yup from 'yup'

const SignInSchema = yup.object().shape({
    email: yup.string("Must be a valid email").email("Must be a valid email").required("Please enter your email"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Please enter your password"),
})

export default SignInSchema