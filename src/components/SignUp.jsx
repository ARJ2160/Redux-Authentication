import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../redux/signUpSlice'
import { signUpErrors, flag } from "../redux/signUpSlice"

const Signup = () => {

    const [formValues, setFormValue] = useState("")
    const [formErrors, setFormErrors] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target
        setFormValue({ ...formValues, [name]: value })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        setFormErrors(validate(formValues))
    }

    const validate = formValues => {

        const errors = {}
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!formValues.email) {
            errors.email = "Email is Required"
        }
        else if (!regex.test(formValues.email)) {
            errors.email = "Enter valid Email"
        }
        if (!formValues.password) {
            errors.password = "Password is Required"
        }
        if (!formValues.firstName) {
            errors.firstName = "First Name is Required"
        }
        if (!formValues.lastName) {
            errors.lastName = "Last Name is Required"
        }

        //Check if there are no errors
        if (Object.keys(errors).length === 0) {
            
            dispatch(signUp({ formValues }))
            console.log(flag);
            if (flag) {
                navigate("/signin")
            }
        } 
        return errors
    }
    return (
        <section id="form">
            <div className="form text-white d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-5">Sign Up Form</h1>
                <h1>Hello {formValues.firstName}</h1>
                <h1>{signUpErrors}</h1>
                <form method="post" onSubmit={handleSubmit} name="form">
                    <label htmlFor="email">First Name</label>
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="firstName"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="form-errors">{formErrors.firstName}</p>
                    <label htmlFor="email">Last Name</label>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="lastName"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="form-errors">{formErrors.lastName}</p>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input
                            type="text"
                            name="email"
                            id = "email"
                            placeholder="email"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="form-errors">{formErrors.email}</p>
                    <label htmlFor="password">Password</label>    
                    <div>
                        <input
                            type="password"
                            name="password"
                            id = "password"    
                            placeholder="password"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="form-errors">{formErrors.password}</p>
                    <button
                        type="submit"
                        className="form-btn mt-5"
                    >Sign Up</button>
                </form>
                <p className="mt-5">Already have an Account? <span><a href="/signin" >Sign In</a></span></p>
            </div>
        </section>
    )
}

export default Signup