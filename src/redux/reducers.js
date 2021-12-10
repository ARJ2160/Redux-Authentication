import { combineReducers } from 'redux'
import signInSlice from './signInSlice'
import signUpSlice from './signUpSlice'

const rootReducer = combineReducers({
    signIn: signInSlice,
    signUp: signUpSlice,
})

export default rootReducer