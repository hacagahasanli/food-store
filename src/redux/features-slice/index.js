import { createSlice } from "@reduxjs/toolkit";
import { featuresInfos } from "../index";
import { setLocaleStorage } from "../index";

const featuresSlice = createSlice({
  name: "features",
  initialState: {
    featuresLists: [
      { id: "allI", name: "All", classes: "allI" },
      { id: "oranges", name: "Oranges", classes: "t" },
      { id: "meats", name: "Fresh Meat", classes: "t" },
      { id: "vegetables", name: "Vegetables", classes: "t" },
      { id: "fastfood", name: "Fastfood", classes: "t" },
    ],
    imageLists: [],
    change: 0,
    iteratorArray: [],
    iterator: 0,
    listFlag: true,
    firstRender: true,
  },
  reducers: {
    addLists(state, actions) {
      const lists = actions.payload;
      lists.map((list) => state.featuresLists.push(list));
    },
    addClass(state, actions) {
      const listID = actions.payload;
      const newList = state.featuresLists.filter((item) => listID === item.id);
      newList[0].classes = listID;
      if (state.listFlag) {
        setLocaleStorage("list", state.imageLists);
        state.listFlag = false;
      }
    },
    removeClass(state) {
      for (const list of state.featuresLists) {
        list.classes = "t";
      }
    },
    addFilteredFeatures(state, actions) {
      const filteredImages = actions.payload;
      state.imageLists = [...filteredImages];
    },
    firstRenderHappened(state, actions) {
      const firstRender = actions.payload;
      state.firstRender = firstRender;
    },
    addImages(state, actions) {
      const image = actions.payload;

      state.imageLists.push(image);

      state.imageLists = state.imageLists.sort((a, b) => {
        return Number(a[0].substring(8, 9)) - Number(b[0].substring(8, 9));
      });

      state.iteratorArray.push(++state.iterator);

      for (let list of state.imageLists) {
        if (!list[2]) {
          for (let i = 0; i < state.imageLists.length; i++) {
            if (state.iteratorArray[i] === Number(list[0].substring(8, 9))) {
              list.push(
                featuresInfos[i].header,
                featuresInfos[i].price,
                featuresInfos[i].id,
                featuresInfos[i].itemId
              );
            }
          }
        }
      }
    },
  },
});

export const featureActions = featuresSlice.actions;

export default featuresSlice;
