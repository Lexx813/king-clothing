import { BLOGS_ACTION_TYPES } from "./blog.types.js";

export const BLOGS_INITIAL_STATE = {
  blogsMap: [],
  isLoading: false,
  error: null,
};

export const blogsReducer = (state = BLOGS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case BLOGS_ACTION_TYPES.SET_BLOGS_MAP:
      return {
        ...state,
        blogsMap: payload,
      };
    default:
      return state;
  }
};
