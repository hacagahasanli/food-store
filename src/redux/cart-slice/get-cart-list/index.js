import axios from "axios";
import { cartActions } from "../index";
import { getLocaleStorage } from "../../index";
import { uniqueIdMaker } from "../../../utils";

export const postOrderedItems = () => {
  return async (dispatch) => {
    const postData = async () => {
      const cartItems = getLocaleStorage("items");
      return cartItems;
    };
    try {
      const datas = await postData();
      const uniqueId = uniqueIdMaker();
      const date = new Date().toLocaleString([], {
        dateStyle: "medium",
        timeStyle: "short",
      });
      const orderInfo = {
        uniqueId: uniqueId,
        date: date,
        uniqueId: uniqueId,
      };
      axios
        .post(
          "https://feature-images-default-rtdb.firebaseio.com/orders.json",
          { ...datas, orderInfo }
        )
        .then((res) => {
          console.log(res);
          console.log(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchOrderedItems = (postOnChange) => {
  return async (dispatch) => {
    if (postOnChange) {
      axios
        .get("https://feature-images-default-rtdb.firebaseio.com/orders.json")
        .then((res) => {
          const data = res.data;
          const loadedItems = [];

          for (const key in data) {
            loadedItems.push({
              id: key,
              item: data[key],
            });
          }

          dispatch(cartActions.setOrder(loadedItems));
          dispatch(cartActions.postOnChange(false));
          console.log("BURADAYAM");
        })
        .catch((err) => {
          if (err.response?.status !== 200) {
            console.log("SOMETHING WENT WRONG!");
          } else {
            console.log("EVERYTHING IS OKAY!");
          }
        });
    }
  };
};
