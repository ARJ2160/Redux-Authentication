import React from 'react'
import { Link } from 'react-router-dom';
import  {userName} from "../redux/signUpSlice"

const SignedUp = () => {

    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-white">Welcome {userName}</h1>
            <Link to ="/">
                <button className="form-btn">
                    Log Out
                </button>
            </Link>
        </div>
    )
}

export default SignedUp
