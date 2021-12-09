import { createSlice } from "@reduxjs/toolkit";

// const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const errors = {}

// const validate = formValues => {

//     if (!formValues.email) {
//         errors.email = "Email is Required"
//     }
//     else if (!regex.test(formValues.email)) {
//         errors.email = "Enter valid Email"
//     }
//     else {
//         errors.email = ""
//     }
//     if (!formValues.password) {
//         errors.password = "Password is Required"
//     }
//     else {
//         errors.password = ""
//     }
//     console.log(errors);
//     if (Object.keys(errors).length === 0) {
//         return true
//     }
//     return false
// }

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        signIn: (state, { payload }) => {
            const { email, password } = payload.formValues
            // if ( validate(payload.formValues)) {
            //     return state.user = payload
            // } else {
            //     return{
            //         message: "User Does not Exist"
            //     }
            // }
            return {
                ...state,
                email,
                password
            }
        },
        signUp: (state, { payload }) => {
            const { email, password, firstName, lastName } = payload.formValues
            if (state.some(e => e.email === email)) {
                return {
                    message: "User Already Exists"
                }
            } else if(validate(payload.formValues)) {
                return [
                    ...state,
                    {
                        email,
                        password,
                        firstName,
                        lastName
                    }
                ]
            } else return state
        }
    }
})

export const {signIn, signUp} = userSlice.actions
export const { messages } = state => state.store.message
export default userSlice.reducer
export {errors}