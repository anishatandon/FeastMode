import * as yup from 'yup'

export const SignUpSchemas = [
    
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
            yup.number("Must be a valid phone number")
            .positive("Must be a valid phone number")
            .integer("Must be a valid phone number")
            .required("Please enter a phone number"),
    
        passwordOne: 
            yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Please enter a password"),
        
        passwordTwo: 
            yup.string()
            .oneOf([yup.ref("passwordOne"), null], "Passwords don't match")
            .required("Make sure you can remember your password!")
    }),

    yup.object().shape({
        creditCard:
            yup.number("Must be a valid phone number")
            .positive("Must be a valid phone number")
            .integer("Must be a valid phone number")
            .required("Please enter a phone number"),

        expDate:
            yup.number("Please enter a valid expiration date")
            .integer("Please input a valid expiration date")
            .test('len', 'Must be of the form MM/YY', val => val.length === 4) // makes sure it is exactly four numbers
            .required("Please input a valid expiration date"),
            
        secCode:
            yup.number("Please enter a valid security code")
            .integer("Please enter a valid security code")
            .min(3, "Please enter a valid security code")
            .required("Please enter a valid security code"),
        
        creditCardType:
            yup.string().required("Please input"),
    }),

    null
]
