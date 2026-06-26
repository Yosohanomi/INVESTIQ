import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/Login/model/authSlice/authSlice"
import transactionReducer from '../../features/Transaction/model/transactionSlice/transactionSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        transactions: transactionReducer,
    }
})