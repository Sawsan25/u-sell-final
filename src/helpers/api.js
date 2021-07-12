import axios from "axios";
import store from "../store";
import { showAlert } from "../store/actions/alerts";

const API_URL = process.env.REACT_APP_API_URL;

const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return "";
};

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    let message = "";
    // console.log(err.response);
    if (err.response) {
      message = err.response.data.error;
    } else {
      message = "Network Error";
    }

    store.dispatch(
      showAlert({
        type: "error",
        message,
      })
    );

    return Promise.reject(err);
  }
);

/**
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data (optional) data in JSON form for POST requests
 * @param {object} params (optional) data in the url for GET requests
 */
export const apiCall = async (method, path, data, params) => {
  const res = await axios({
    method,
    url: API_URL + path,
    data,
    params,
  });
  return res;
};
