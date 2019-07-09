import * as yup from 'yup'

export const ProfileEditSchema = [

yup.object().shape({
    firstName:
        yup.string("Must be a valid name")
        .required("Please enter your name"),

    lastName:
        yup.string("Must be a valid name"),

    username:
        yup.string("Must be a valid username")
        .min(4, "Username must be at least 4 characters")
        .required("Please enter a username"),

    email:
        yup.string("Must be a valid email")
        .email("Must be a valid email")
        .required("Please enter an email"),

    phone:
        yup.number()
        .typeError('Please enter a valid phone number')
        .positive('Please enter a valid phone number')
        .required('Please enter a phone number'),

    passwordOne: 
        yup.string()
        .min(8, "Password must be at least 8 characters"),

    passwordTwo:
        yup.string().when("passwordOne", {
            is: function(value) { return value.length > 0},
            then: yup.string()
                .oneOf([yup.ref("passwordOne"), null], "Passwords don't match")
                .required("Make sure you can remember your password!")
        }),
        
    creditCard:
        yup.number()
        .typeError('Please enter a valid credit card number')
        .positive('Please enter a valid credit card number')
        .required('Please enter your credit card number'),

    expDate:
        yup.number()
        .typeError('Please enter a valid expiration date')
        .positive('Please enter a valid expiration date')
        .test('len', 'Must be of the form MMYY', function(value) { 
            if (!value) {
                return false
            }
            return value.toString().length === 4 
            }) // makes sure it is exactly four numbers
        .required('Please enter the expiration date'),
        
    secCode:
        yup.number()
        .typeError('Please enter a valid security code')
        .positive('Please enter a valid security code')
        .required('Please enter the security code'),
    
    creditCardType:
        yup.string()
        .required("Credit card type is required"),
}),
]

export const PasswordRecoverySchema = yup.object().shape({
    email: yup.string("Must be a valid email").email("Must be a valid email").required("Please enter your email"),
})
