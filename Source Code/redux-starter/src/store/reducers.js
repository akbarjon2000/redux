import { combineReducers } from "@reduxjs/toolkit"

import bugsReducer from "./bugs"
import productsReducer from './projects'
import usersReducer from "./users"


export default combineReducers({
    bugs: bugsReducer,
    products: productsReducer,
    users: usersReducer

});




