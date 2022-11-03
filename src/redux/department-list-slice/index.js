import { createSlice } from "@reduxjs/toolkit";
// import { lists } from "../index";

const departmentListSlice = createSlice({
  name: "departmentList",
  initialState: {
    lists: [
      { id: "meat1", name: "Fresh Meat" },
      { id: "vegetables2", name: "Vegetables" },
      { id: "fruit3", name: "Fruit & Nut Gifts" },
      { id: "berries4", name: "Fresh Berries" },
      { id: "ocean5", name: "Ocean Foods" },
      { id: "butter6", name: "Butter & Eggs" },
      { id: "fastfood7", name: "FastFood" },
      { id: "onion8", name: "Fresh Onion" },
      { id: "crisps9", name: "Papayaya & Crisps" },
      { id: "oatmeal10", name: "Oatmeal" },
      { id: "bananas11", name: "Fresh Bananas" },
    ],
    toggle: true,
  },
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const departmentListActions = departmentListSlice.actions;

export default departmentListSlice;
