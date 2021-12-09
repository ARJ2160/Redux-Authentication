// import { combineReducers, createStore } from "redux"
// import { signInReducer, signUpReducer } from "./reducers"


// const rootReducer = combineReducers({
//     signIn: signInReducer,
//     signUp: signUpReducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(
//     persistedReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )

// export const persistor = persistStore(store)

// import { configureStore } from "@reduxjs/toolkit";
// import signInSlice from "./signInSlice"
// import signUpSlice from "./signUpSlice"

// export const store = configureStore({
//     reducer: {
//         signIn: signInSlice,
//         signUp: signUpSlice
//     }
// })


import { configureStore } from "@reduxjs/toolkit";
// import signInSlice from "./signInSlice"
// import signUpSlice from "./signUpSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers";

  
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer: {
    //     signIn: signInSlice,
    //     signUp: signUpSlice
    // }
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)