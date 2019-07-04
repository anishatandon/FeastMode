import * as yup from 'yup'

const ProfileChangeSchema = yup.object().shape({
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
})

export default ProfileChangeSchema