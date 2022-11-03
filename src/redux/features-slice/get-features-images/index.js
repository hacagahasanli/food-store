import { featureActions } from "../index";
import { storage } from "../../../services/firebase/index";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { getLocaleStorage } from "../../index";
const imageListRef = ref(storage, "/images/featuresimages");

export const fetchFeaturesImages = () => {
  return async (dispatch) => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          dispatch(featureActions.addImages([item.name.substring(0, 9), url]));
        });
      });
    });
  };
};

export const getLocaleLists = (id) => {
  return async (dispatch) => {
    const getData = async () => {
      const datas = getLocaleStorage("list");
      if (id === "allI") {
        return datas;
      }
      const filteredDatas = datas.filter((data) => data[4] === id);
      return filteredDatas;
    };
    try {
      const filteredDatas = await getData();
      dispatch(featureActions.addFilteredFeatures(filteredDatas));
    } catch (err) {
      console.log(err);
    }
  };
};
