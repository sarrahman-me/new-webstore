import { configureStore } from "@reduxjs/toolkit";
import wishlist from "./slice/wishlist";

const store = configureStore({
  reducer: {
    wishlist,
  },
});

export default store;
