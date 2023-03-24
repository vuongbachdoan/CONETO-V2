import { createSlice } from "@reduxjs/toolkit";

export const userSlices = createSlice({
    name: 'USER',
    initialState: {
        user: {},
        logOut: () => {}
    },
    reducers: {
        setLogOutFunc: (state, action) => state.logOut = action.payload,
        setUserData: (state, action) => state.user = action.payload
    }
})

export const { someAction, setLogOutFunc, setUserData } = userSlices.actions;
export default userSlices.reducer;