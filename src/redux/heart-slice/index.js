import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialItems: [],
  wishLists: JSON.parse(localStorage.getItem("wishlist")) || [],
  wishListsQuantity: JSON.parse(localStorage.getItem("wishListsQuantity")) || 0,
  showScroll: false,
  showWishlist: false,
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    setInitialState(state, actions) {
      const items = actions.payload;
      state.initialItems.length = 0;
      state.initialItems = items.map((item) => {
        item = [...item];
        return item;
      });
    },
    addToWishList(state, actions) {
      const id = actions.payload;
      const addedItem = state.initialItems.find((item) => item[5] === id);
      const addedIndex = state.wishLists.findIndex((item) => item[5] === id);

      const localeAdd = (name, item) => {
        localStorage.setItem(name, JSON.stringify(item));
      };

      if (addedIndex === -1) {
        state.wishLists.push(addedItem);
        localeAdd("wishlist", state.wishLists);
        state.wishListsQuantity++;
      }
      
      localeAdd("wishListsQuantity", state.wishListsQuantity);
    },

    removeFromWishList(state, actions) {
      const id = actions.payload;
      state.wishLists = state.wishLists.filter((item) => item[5] !== id);

      const localeAdd = (name, item) => {
        localStorage.setItem(name, JSON.stringify(item));
        console.log(typeof item);
      };

      localeAdd("wishlist", state.wishLists);
      state.wishListsQuantity--;
      localeAdd("wishListsQuantity", state.wishListsQuantity);
    },

    removeAddedToCart(state, actions) {},
    showWishlist(state, actions) {
      const value = actions.payload;
      state.showWishlist = value;
    },
  },
});

export default heartSlice;

export const heartActions = heartSlice.actions;
