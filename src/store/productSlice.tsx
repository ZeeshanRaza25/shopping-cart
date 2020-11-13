import { createSlice } from "@reduxjs/toolkit"
import INITIAL_STATE from "./state"
// import ProductItem from './state';
type item = {
    id: Number,
    name: String,
    price: Number,
    type: String,
    rating: Number,
    quantity: Number,
    imgUrl: string,
    img1: string,
    img2: string,
    img3: string,
    added?: boolean,
}

const basketSlice = createSlice({
    name: "basket",
    initialState: INITIAL_STATE,
    reducers: {
        add: (state, action) => {
            let a = JSON.parse((JSON.stringify(state, undefined, 2))); // here a = state
            // console.log(action.payload.id)
            return a.map((item: item) => {
                // console.log(item)
                if (item.id !== action.payload.id) {
                    return item
                }
                return {
                    ...item,
                    added: true,
                    quantity: +item.quantity + 1
                }
            })
        },

        remove: (state, action) => {
            let a = JSON.parse((JSON.stringify(state, undefined, 2))); // here a = state

            return a.map((item: item) => {
                if (item.id !== action.payload.id) {
                    return item
                }
                else if (item.quantity <= 1) {
                    return {
                        ...item,
                        quantity: 0,
                        added: false,
                    }
                }
                return {
                    ...item,
                    quantity: +item.quantity - 1
                }

            })
        },

        clear: (state, action) => {
            let a = JSON.parse((JSON.stringify(state, undefined, 2))); // here a = state

            return a.map((item: item) => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    quantity: 0,
                    added: false,
                }
            })
        },

        inc: (state, action) => {
            let a = JSON.parse((JSON.stringify(state, undefined, 2))); // here a = state

            return a.map((item: item) => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    quantity: +item.quantity + 1
                }
            })
        },
        // dec: (state, action) => {
        //     let a = JSON.parse((JSON.stringify(state, undefined, 2))); // here a = state

        //     return a.map(item => {
        //         if (item.id !== action.payload.id) {
        //             return item
        //         }

        //         return {
        //             ...item,
        //             quantity: item.quantity - 1
        //         }
        //     })
        // }
    }
})

// const store = configureStore({ reducer: basketSlice.reducer });
// export const { add, remove } = basketSlice.actions;

// export { basketSlice, store };

export const { add, remove, clear, inc } = basketSlice.actions;
export default basketSlice.reducer;