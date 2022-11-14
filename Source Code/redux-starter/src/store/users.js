import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect"
let counter = 1
const slice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (users, action) => {
            users.push({
                id: counter++,
                user: action.payload.user,
            })
        }
    }
})


export const { addUser, assignBug } = slice.actions
export default slice.reducer

