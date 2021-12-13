import React from 'react'
import { Link } from 'react-router-dom';
import { signInSuccess, userName } from "../redux/signUpSlice"

const SignedUp = () => {

    return (
        <div className="d-flex align-items-center justify-content-center flex-column side-padding">
            {/* {console.log(signInSuccess)}
            {
                setTimeout(() => {
                    <span className="text-white">{signInSuccess}</span>
                }, 3000)
            } */}
            <div className="p-4">
                <h1 className="text-white">{signInSuccess}</h1>
            </div>
            <h1 className="text-white">Welcome {userName}</h1>
            <Link to ="/signedout">
                <button className="form-btn">
                    Log Out
                </button>
            </Link>
        </div>
    )
}

export default SignedUp
