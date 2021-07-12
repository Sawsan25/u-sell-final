import * as types from "../actionTypes";

const initialState = {
  show: false,
  options: {
    type: null,
    message: null,
  },
};

const alerts = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_ALERT:
      return {
        ...state,
        show: true,
        options: { ...action.payload },
      };
    case types.HIDE_ALERT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default alerts;
