import * as types from "../actionTypes";

export const showAlert = (options) => ({
  type: types.SHOW_ALERT,
  payload: options,
});

export const hideAlert = () => ({
  type: types.HIDE_ALERT,
});
