import { SET_FIRST_NAME, SET_LAST_NAME } from "../actionTypes";


export const initialState = {
  firstName: "Didier",
  lastName: "Franc",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.value };
    case SET_LAST_NAME:
      return { ...state, lastName: action.value };
    default:
      return;
  }
};