import { SET_FIRST_NAME, SET_LAST_NAME } from "../actionTypes";

export const setFirstName = (value) => ({
  type: SET_FIRST_NAME,
  value,
});

export const setLastName = (value) => ({
  type: SET_LAST_NAME,
  value,
});