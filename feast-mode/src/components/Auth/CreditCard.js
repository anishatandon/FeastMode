
export const getCreditCardType = accountNumber => {
  let result = "unknown"
  
  if (/^5[1-5]/.test(accountNumber)) { result = "mastercard" }
  else if (/^4/.test(accountNumber)) { result = "visa" }
  else if (/^3[47]/.test(accountNumber)) { result = "amex" }
  return result
}

export const displayCreditCardType = (type) => {
    switch (type) {
        case "mastercard":
            break;

        case "visa":
            break;

        case "amex":
            break;

        default:
            break;
    }
}

export const isValidIdentifier = identifier => {
    let sum = 0
    let alt = false
    let i = identifier.length-1
    let num

    while (i >= 0) {
        //get the next digit
        num = parseInt(identifier.charAt(i), 10)

        //if it's not a valid number, abort
        if (isNaN(num)) { return false }

        //if it's an alternate number...
        if (alt) {
            num *= 2
            if (num > 9){
                num = (num % 10) + 1
            }
        } 
        
        alt = !alt //flip the alternate bit
        sum += num //add to the rest of the sum
        i-- //go to next digit
    }

    return (sum % 10 === 0) //determine if it's valid
}