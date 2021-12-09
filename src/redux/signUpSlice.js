import { createSlice } from "@reduxjs/toolkit"

const initialState = []
let flag = false
let signUpErrors = ""
let signInErrors = ""
let userName = ""

const signUpSlice = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        signUp: (state = initialState, { payload }) => {
            
            const { email, password, firstName, lastName } = payload.formValues
            if (state.find(mail => mail.email === email)) {
                flag = false
                signUpErrors = "User Already Exists"
                return state
            }
            else {
                userName = firstName
                flag = true
                return [
                    ...state,
                    {
                        email,
                        password,
                        firstName,
                        lastName
                    }
                ]
            }
        },
        checksignIn: (state = initialState, { payload }) => {

            const { email, password } = payload.formValues
            const foundMail = state.find(mail => mail.email === email)
            if (foundMail) {
                if (state.find(pass => pass.password === password)) {
                    userName = state.find(mail => {
                        if (mail.email === email)
                            return mail.firstName
                        return null
                    })
                    flag = true
                    return state
                } else {
                    flag = false
                    signInErrors = "Incorrect Password"
                }
            } else {
                flag = false
                signInErrors = "Email Address Does Not Exist"
            }
        }
    }
})

export const { signUp, checksignIn } = signUpSlice.actions
export default signUpSlice.reducer
export { flag, signInErrors, signUpErrors, userName }