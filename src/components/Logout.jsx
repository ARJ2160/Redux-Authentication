import React from 'react'

const Logout = () => {

    // function preventBack() { window.history.forward(); }  
    // setTimeout(preventBack(), 0);  
    // window.onunload = function () {};  
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{color: "#fffffe"}}>
            <h1 className="text-center mt-5">You have Logged Out</h1>
            <div className="btns">
                <a href="/" ><button className="form-btn m-3" style={{color: "#fffffe"}}>Sign Up</button></a>
                <a href="/signin" ><button className="form-btn m-3" style={{color: "#fffffe"}}>Sign In</button></a>
            </div>
        </div>
    )
}

export default Logout
