// import { ActionTypes } from "./actionTypes";

// const initialSignInState = {
//     list: []
//     // email: "",
//     // password: "",
// }
// export const signInReducer = (state = initialSignInState, action) => {
//     switch (action.type) {
//         case ActionTypes.USER_SIGN_IN:
//             const { email, password } = action.payload.data
//             return {
//                 ...state,
//                 list: [
//                     ...state.list,
//                     {
//                         email,
//                         password
//                     }
//                 ]

//             }
//         default: return state
//     }
// }

// const initialSignUpState = {
//     list: []
// }
// export const signUpReducer = (state = initialSignUpState, action) => {
//     switch (action.type) {
//         case ActionTypes.USER_SIGN_UP:
//             const { email, password, firstName, lastName } = action.payload.data
//             return {
//                 ...state,
//                 list: [
//                     ...state.list,
//                     {
//                         email,
//                         password,
//                         firstName,
//                         lastName
//                     }
//                 ]
//             }
//         default:
//             return state
//     }
// }
