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
            yup.string()
            .required("Please input a valid credit card number"),

        expDate:
            yup.string()
            .required("Please input a valid expiration date"),
            
        secCode:
            yup.string()
            .required("Please input a valid security code"),
        
        creditCardType:
            yup.string()
            .required("Please input your credit card type"),
    }),

    null
]
