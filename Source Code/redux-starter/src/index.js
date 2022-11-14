import { ADD_BUG, bugAssignedUser, REMOVE_BUG, selectUser } from "./store/bugs";
import configureStore from "./store/configureStore";
import { addProduct, changeProduct } from "./store/projects";
import { addUser, assignBug } from "./store/users";

const store = configureStore()
store.dispatch(ADD_BUG({ description: "Bug1" }))
store.dispatch(ADD_BUG({ description: "Bug2" }))
store.dispatch(ADD_BUG({ description: "Bug3" }))
store.dispatch(REMOVE_BUG({ id: 1 }))


store.dispatch(addProduct({ name: "project1" }))
store.dispatch(addProduct({ name: "project2" }))
store.dispatch(changeProduct({ id: 1, newName: "Project1Changed" }))

store.dispatch(addUser({ user: "user1" }))
store.dispatch(addUser({ user: "user2" }))
store.dispatch(addUser({ user: "user3" }))
store.dispatch(bugAssignedUser({ bugId: 1, userId: 1 }))
store.dispatch(bugAssignedUser({ bugId: 2, userId: 1 }))

store.dispatch((dispatch) => {

})

store.dispatch({ type: 'error', payload: { message: "an error occured " } })
store.dispatch({
    type: "apiCallBegan", payload: {
        onSuccess: "apiReceived",
        onerror: "apiRequestFailed"
    }
})
console.log(selectUser(1)(store.getState()))
// console.log(store.getState())