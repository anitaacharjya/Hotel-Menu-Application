function Validation(values){

    let error = {}

    if(values.email === ""){
        error.email = "Email shlould not be empty"
    }

    else if(values.email !== "anita@gmail.com"){
        error.email = "Email Not Matching"
    }

    else if(values.email =="anita@gmail.com"){
        error.email = ""
    }

    else{
        error.email = ""
    }


    if(values.password === ""){
        error.password = "Password shlould not be empty"
    }

    else if(values.password == "Anita@123"){
        error.password = " "
    }

    else if(values.password !== "Anita@123"){
        error.password = "Password Not Matching"
    }

    else{
        error.password = ""
    }

    return error;

}

export default Validation;