var counter = 0
export const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BUG':
            return [...state, {
                id: counter++,
                description: action.payload.description,
                resolved: false
            }]
        case 'RESOLVED_BUG':
            return [
                ...state, {
                    id: action.payload.id,
                    description: state.filter(val => val.id === action.payload.id).description,
                    resolved: true
                }
            ]
        case 'BUG_REMOVED':
            return state.filter(val => val.id !== action.payload.id)
        default: return state;
    }
}