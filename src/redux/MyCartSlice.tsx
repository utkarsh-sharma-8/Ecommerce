import { createSlice } from '@reduxjs/toolkit';

const MyCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToMyCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
          console.log('error');
        }
      });
      if (myIndex == -1) {
        state.push({
          description: action.payload.description,
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          price: action.payload.price,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },
    removeMyCartItem(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
          console.log('error');
        }
      });
      if (myIndex == -1) {
      } else {
        state[myIndex].qty = state[myIndex].qty - 1;
      }
    },
    deleteMyCartItem(state, action) {
      return (state = state.filter(item => {
        item.id !== action.payload;
      }));
    },
  },
});

export const {addProductToMyCart, removeMyCartItem, deleteMyCartItem} =
  MyCartSlice.actions;
export default MyCartSlice.reducer;
