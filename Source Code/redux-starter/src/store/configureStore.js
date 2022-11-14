import { configureStore } from "@reduxjs/toolkit";
import func from "./middleware/func";
import toast from "./middleware/toast";
import reducer from "./reducers";
import api from "./middleware/api"
// import reducer from "./projects";
export default function () {
    return configureStore({
        reducer,
        middleware: [func, toast, api]
    })
}