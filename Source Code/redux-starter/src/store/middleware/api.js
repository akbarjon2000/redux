import axios from "axios"
let response = null
const api = ({ dispatch }) => next => async action => {
    if (action.type !== 'apiCallBegan') return next(action)

    next(action)

    const { onSuccess, onError } = action.payload
    try {
        const result = await axios.get("https://62add65f2c15d3582e5484ec.mockapi.com/bugs");
        dispatch({ type: onSuccess, payload: result.data })
        // response = JSON.parse(result.data)
        // console.log(response)
    } catch (error) {
        dispatch({ type: onError, payload: error })
    }

}

export default api