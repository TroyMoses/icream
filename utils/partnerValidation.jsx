export default function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.fname === "") {
        error.fname = "First Name should not be empty"
    } 
    else {
        error.fname = ""
    }

    if(values.lname === "") {
        error.lname = "Second Name should not be empty"
    } 
    else {
        error.lname = ""
    }

    if(values.gender === "") {
        error.gender = "Gender should not be empty"
    } 
    else {
        error.gender = ""
    }

    if(values.email === "") {
        error.email = "Email should not be empty"
    } 
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Doesn't match"
    }
    else {
        error.email = ""
    }

    if(values.address === "") {
        error.address = "Address should not be empty"
    } 
    else {
        error.address = ""
    }
    
    if(values.phone === "") {
        error.phone = "Phone should not be empty"
    } 
    else {
        error.phone = ""
    }

    if(values.sponsor === "") {
        error.sponsor = "Please Specify Sponsorship"
    } 
    else {
        error.sponsor = ""
    }

    return error;

}
