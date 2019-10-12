import { SET_FIRST_NAME, SET_LAST_NAME } from '../actionTypes';

export const initialState = {
  items: [1, 2, 3, 4, 5, 6],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, items: initialState.items.reverse() };
    case SET_LAST_NAME:
      return { ...state, items: initialState.items };
    default:
      return state;
  }
};