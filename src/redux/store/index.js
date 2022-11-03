import { configureStore } from "@reduxjs/toolkit";
import {
  featuresSlice,
  departmentListSlice,
  cartSlice,
  heartSlice,
} from "../index";

import { injectStore } from "../../services/axios";

const store = configureStore({
  reducer: {
    featuresSlice: featuresSlice.reducer,
    departmentListSlice: departmentListSlice.reducer,
    heartSlice: heartSlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});

injectStore(store);

export default store;
