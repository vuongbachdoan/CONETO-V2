import { createSlice } from "@reduxjs/toolkit";

export const userSlices = createSlice({
    name: 'USER',
    initialState: {
        user: {},
        logOut: () => {},
        messages: []
    },
    reducers: {
        setLogOutFunc: (state, action) => {
            state.logOut = action.payload
        },
        setUserData: (state, action) => {
            state.user = action.payload
        },
        pushMessage: (state, action) => {
            state.messages = [...state.messages, action.payload]
        },
        updateMessages: (state, action) => {
            state.messages = action.payload
        }
    }
})

export const { setLogOutFunc, setUserData, updateMessages, pushMessage } = userSlices.actions;
export default userSlices.reducer;
