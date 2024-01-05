import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Validation from './signupvalidation'

const Signup = () => {
 
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
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
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            <div className='bg-white p-3 rounded w-25s'>
                <h3 className='p-4 rounded w-25s'>Signup Page</h3>
                <form action="" onSubmit={handlesubmit}>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name ' name ="name" onChange={handleinput} className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'> {errors.name} </span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email ' name ="email" onChange={handleinput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email} </span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password ' name ="password" onChange={handleinput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password} </span>}
                    </div>

                    <button type="submit" className='btn btn-success w-40 rounded-0'>Sign up </button>
                    <p>Please create account by clicking below. </p>
                    <Link to="/" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Log in</Link>

                </form>
            </div>
        </div>
        </>
    )
}

export default Signup
