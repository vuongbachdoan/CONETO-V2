import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/User/userReducer";

export default configureStore({
    reducer: {
        USER: userReducer
    }
})