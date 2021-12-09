import { createSlice } from "@reduxjs/toolkit"

const initialState = []
const errors = []


const signInSlice = createSlice({
    name: "SignIn",
    initialState,
    reducers: {
        signIn: (state, { payload }) => {
            const { email, password } = payload.formValues
            return [
                ...state,
                {
                    email,
                    password
                }
            ]
        }
    }
})

export const { signIn } = signInSlice.actions
export default signInSlice.reducer
export {errors}