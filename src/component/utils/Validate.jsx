export default function validate(values){
    let errors = {};

    if(!values.username.trim()){
        errors.username = "Username required";
    }
    if(!values.email.trim()){
        errors.email = "Email required";
    }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = "Email address is invalid";
    }
    if(!values.password.trim()){
        errors.password = "Password is required";
    }else if(values.password.lenght > 6){
        errors.password = "Password needs to be 6 characters or more";
    }
    if(!values.cpassword.trim()){
        errors.cpassword = "Password is required";
    }else if(values.cpassword !== values.password){
        errors.cpassword = "Password do not match";
    }
    return errors;
}