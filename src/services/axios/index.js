import axios from "axios";

let store;

export const injectStore = (_store) => {
  store = _store;
};

axios.interceptors.request.use(
  (request) => {
    if (request.url.includes("orders.json") && request.method === "post") {
      request.headers["ItemTotals"] = store.getState().cartSlice.itemTotals;
    }
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === (404 || 401)) return Promise.reject(error);
  }
);
