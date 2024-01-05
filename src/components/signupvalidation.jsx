function Validation(values){

    let error = {}


    if(values.name === ""){
        error.name = "name shlould not be empty"
    }

    else{
        error.name = ""
    }

    if(values.email === ""){
        error.email = "Email shlould not be empty"
    }


    else{
        error.email = ""
    }


    if(values.password === ""){
        error.password = "Password shlould not be empty"
    }

   

    else{
        error.password = ""
    }

    return error;

}

export default Validation;