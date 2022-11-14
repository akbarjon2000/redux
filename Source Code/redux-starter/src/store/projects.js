import { createSlice } from "@reduxjs/toolkit";


var counter = 1;
const slice = createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        addProduct: (products, action) => {
            products.push({
                id: counter++,
                name: action.payload.name,
            })
        },
        changeProduct: (products, action) => {
            const index = products.findIndex(product => product.id === action.payload.id);
            products[index].name = action.payload.newName
        }
    }
})


export const { addProduct, changeProduct } = slice.actions
export default slice.reducer