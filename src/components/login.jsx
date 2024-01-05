
import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./loginvalidation";

const Login = () => {

    const [values, setValues] = useState(

        {
            email: '',
            Password: ''
        })

    const [errors, setErrors] = useState({})

    const handleinput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))
    }


    return (

        <>

            <div className='d-flex justify-content-center align-items-center bg-danger  vh-100'>
                <div className='bg-white p-3 rounded w-25s'>
                    <h3 className='p-4 rounded w-25s'>Login Page</h3>
                    <form action="" onSubmit={handlesubmit}>

                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" placeholder='Enter Email ' onChange={handleinput} name="email" className='form-control rounded-0' />

                           
                            {errors.email && <span className='text-danger'> {errors.email} </span>}
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" onChange={handleinput} name="password" placeholder='Enter Password ' className='form-control rounded-0' />
                            {errors.password && <span className='text-danger'> {errors.password} </span>}
                        </div>

                        <button type="submit" className='btn btn-success w-40 rounded-0'>Log in</button>
                        <p>Please create account by clicking below. </p>
                        <Link to="/signup" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Create Account</Link>

                    </form>
                </div>
            </div>
        </>

    )

}

export default Login