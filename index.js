import store from "./store";

store.dispatch({
    type: "ADD_BUG",
    payload: {
        description: "Bug1",
    }
})

store.dispatch({
    type: "RESOLVED_BUG",
    payload: {
        id: 1,
    }
})
console.log(store.getState())