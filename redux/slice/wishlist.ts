import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistCount: 0,
  },
  reducers: {
    setWishlistCount: (state, action) => {
      state.wishlistCount = action.payload;
    },
  },
});

export const { setWishlistCount } = wishlistSlice.actions;

export default wishlistSlice.reducer;
