import Orange from "../assets/images/categoriesimages/cat-1.jpg.png";
import DriedFruite from "../assets/images/categoriesimages/cat-2.jpg.png";
import Vegatables from "../assets/images/categoriesimages/cat-3.jpg.png";
import Juice from "../assets/images/categoriesimages/cat-4.jpg.png";
import Meat from "../assets/images/categoriesimages/cat-5.jpg.png";
import categoriesSlice from "./categories-slice";
import featuresSlice from "./features-slice";
import departmentListSlice from "./department-list-slice";
import heartSlice from "./heart-slice";
import cartSlice from "./cart-slice";
import lists from "../constants/deparmentLists/index";
import { featuresInfos, headersInfos } from "../constants/featuresinfos/index";
import { getLocaleStorage, setLocaleStorage } from "../utils/lStorage";

export {
  Orange,
  DriedFruite,
  Vegatables,
  Juice,
  Meat,
  lists,
  featuresInfos,
  headersInfos,
  categoriesSlice,
  featuresSlice,
  departmentListSlice,
  heartSlice,
  cartSlice,
  getLocaleStorage,
  setLocaleStorage,
};
