import { createSlice } from "@reduxjs/toolkit";
import { getLocaleStorage, setLocaleStorage } from "../../utils/lStorage";
import { ifNegativeMakeZero } from "../../utils";

const initialState = {
  itemInfos: [],
  addedItems: [],
  itemTotals: getLocaleStorage("totals") || {
    totalQuantity: 0,
    totalPrice: 0,
  },
  orders: getLocaleStorage("orders") || [],
  showCart: false,
  showScroll: false,
  postOnChange: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInitialState(state, actions) {
      const items = actions.payload;
      state.itemInfos.length = 0;
      state.itemInfos = items.map((item) => {
        item = [...item, { cartQuantity: 0, totalPrice: 0 }];
        return item;
      });
    },
    addToCart(state, actions) {
      const id = actions.payload;
      state.addedItems = getLocaleStorage("items") || [];
      state.itemTotals = getLocaleStorage("totals") || {
        totalQuantity: 0,
        totalPrice: 0,
      };

      let element = state.itemInfos.find((item) => item[5] === id) || [];
      const addedLocalItem = state.addedItems.find((item) => item[5] === id);

      if (addedLocalItem !== undefined) {
        element = addedLocalItem;
      }

      const price = Number(
        parseFloat(element[3]?.substring(1, element[3]?.length)).toFixed(2)
      );
      const totals = element[6];

      if (element[6].cartQuantity > 0) {
        const index = state.addedItems.findIndex((item) => item[5] === id);
        state.addedItems[index][6].cartQuantity++;
        state.addedItems[index][6].totalPrice += price;
      } else {
        totals.totalPrice += price;
        totals.cartQuantity++;
        state.addedItems.push(element);
      }

      state.itemTotals.totalPrice += price;
      state.itemTotals.totalQuantity++;

      setLocaleStorage("items", state.addedItems);
      setLocaleStorage("totals", state.itemTotals);
    },
    removeFromCart(state, actions) {
      const id = actions.payload;
      state.addedItems = getLocaleStorage("items");
      state.itemTotals = getLocaleStorage("totals");

      let element = state.itemInfos.find((item) => item[5] === id) || [];
      const addedLocalItem = state.addedItems.find((item) => item[5] === id);

      if (addedLocalItem !== undefined) {
        element = addedLocalItem;
      }

      let price;
      try {
        if (typeof element[3] !== "undefined") {
          price = Number(
            parseFloat(element[3]?.substring(1, element[3]?.length)).toFixed(2)
          );
        }
      } catch (err) {}

      if (element[6].cartQuantity === 1) {
        state.addedItems = state.addedItems.filter((item) => item[5] !== id);
        const index = state.itemInfos.findIndex((item) => item[5] === id);
        state.itemInfos[index][6].cartQuantity = 0;
        state.itemInfos[index][6].totalPrice = 0;
      } else {
        element[6].totalPrice -= price;
        element[6].cartQuantity--;
      }

      state.itemTotals.totalPrice -= price;
      state.itemTotals.totalQuantity--;

      state.itemTotals.totalQuantity = ifNegativeMakeZero(
        state.itemTotals.totalQuantity
      );
      state.itemTotals.totalPrice = ifNegativeMakeZero(
        state.itemTotals.totalPrice
      );

      setLocaleStorage("items", state.addedItems);
      setLocaleStorage("totals", state.itemTotals);
    },
    addScrollBar(state, actions) {
      const value = actions.payload;
      state.showScroll = value;
    },
    showCart(state, actions) {
      const value = actions.payload;
      state.showCart = value;
    },
    setOrder(state, actions) {
      const orderdItems = actions.payload;
      state.orders = [...orderdItems];
      setLocaleStorage("orders", state.orders);
    },
    postOnChange(state, actions) {
      const value = actions.payload;
      state.postOnChange = value;
    },
    removeAllItems(state) {
      state.addedItems = [];
      setLocaleStorage("items", []);
      setLocaleStorage("totals", {
        totalQuantity: 0,
        totalPrice: 0,
      });
      state.addedItems = getLocaleStorage("items");
      state.itemTotals = getLocaleStorage("totals");
    },
  },
});

export default cartSlice;

export const cartActions = cartSlice.actions;
