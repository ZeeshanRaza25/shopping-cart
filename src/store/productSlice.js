import { createSlice } from "@reduxjs/toolkit"

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        selectedProduct: [],
        price: 0,
    },
    reducers: {
        add: (state, action) => {
            console.log(action.payload.payload)
                // const sumItems = selectedProduct => {
                //     let itemCount = selectedProduct.reduce((total, product) => total + product.quantity, 0);
                //     let total = selectedProduct.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
                //     return { itemCount, total }
                // }
                // if (!state.selectedProduct.find(item => item.id === action.payload.id)) {
                //     state.selectedProduct = [...state.selectedProduct, action.payload]
                // }

            // return {
            //     ...state.selectedProduct,
            //     ...sumItems(state.selectedProduct),
            //     selectedProduct: [...state.selectedProduct]
            // }
            // return state.selectedProduct.map(item => {
            //         if (item.id !== action.payload.payload.id) {
            //             return item
            //         }

            //         return {
            //             ...item,
            //             added: true
            //         }
            //     })
            state.selectedProduct = [...state.selectedProduct, action.payload.payload]
        },
        remove: (state, action) => {
            console.log(action.payload)
            let remitem = state.selectedProduct.filter(({ id }) => id !== action.payload.id);
            state.selectedProduct = remitem;

            // return state.map(item => {
            //     if (item.id !== action.payload.id) {
            //         return item
            //     }
            //     return {
            //         ...item,
            //         added: false
            //     }
            // })
        },
        clear: (state) => {
            state.selectedProduct = [];
        }
    }
})

// const store = configureStore({ reducer: basketSlice.reducer });
// export const { add, remove } = basketSlice.actions;
// export { basketSlice, store };


export const { add, remove } = basketSlice.actions;
export default basketSlice.reducer;