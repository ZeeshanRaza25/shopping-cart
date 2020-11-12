// import { createSlice } from '@reduxjs/toolkit';
// import INITIAL_STATE from '../../app/store/state';

// export const productSlice = createSlice({
//     name: 'product',
//     initialState: INITIAL_STATE,
//     reducers: {
//         REMOVE_ITEM: (state, action) => {
//             state.items = state.items.filter(item => item.id !== action.payload)
//         },
//         ADD_ITEM: (state, action) => {
//             state.items = [...state.items, action.payload]
//         },
//     },
// });

// export const { REMOVE_ITEM, ADD_ITEM } = productSlice.actions;

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.items;

// export default productSlice.reducer;