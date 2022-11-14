import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"
import { createSelector } from "reselect"
//action creators:
// export const ADD_BUG = createAction("ADD_BUG")
// export const RESOLVE_BUG = createAction("RESOLVE_BUG")
// export const REMOVE_BUG = createAction('REMOVE_BUG')

//reducers:

var counter = 1

//createSlice:
const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        bugAssignedUser: (bugs, action) => {
            const { bugId, userId } = action.payload
            const index = bugs.findIndex(bug => bug.id === bugId)
            bugs[index].userId = userId;
        },
        ADD_BUG: (bugs, action) => {
            bugs.push({
                id: counter++,
                description: action.payload.description,
                resolved: false
            })
        },
        REMOVE_BUG: (bugs, action) => {
            bugs.filter(bug => bug.id !== action.payload.id);
        },
        RESOLVE_BUG: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        }
    }
})

//createReducer:
// export default createReducer([], {
//     [ADD_BUG.type]: (bugs, action) => {
//         bugs.push({
//             id: counter++,
//             description: action.payload.description,
//             resolved: false
//         })
//     },
//     [RESOLVE_BUG.type]: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id);
//         bugs[index].resolved = true;
//     },
//     [REMOVE_BUG]: (bugs, action) => {
//         bugs.filter(bug => bug.id === action.payload.id);
//     }
// })
// export const reducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_BUG':
//             return [...state, {
//                 id: counter++,
//                 description: action.payload.description,
//                 resolved: false
//             }]
//         case 'RESOLVE_BUG':
//             return [
//                 ...state, {
//                     id: action.payload.id,
//                     description: state.filter(val => val.id === action.payload.id).description,
//                     resolved: true
//                 }
//             ]
//         case 'REMOVE_BUG':
//             return state.filter(val => val.id !== action.payload.id)
//         default: return state;
//     }
// }
export const { ADD_BUG, REMOVE_BUG, RESOLVE_BUG, bugAssignedUser } = slice.actions
export default slice.reducer

export const selectUser = userId => createSelector(
    state => state.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)