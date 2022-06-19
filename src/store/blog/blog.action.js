import { BLOGS_ACTION_TYPES } from "./blog.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setBlogs = blogsArray =>
  createAction(BLOGS_ACTION_TYPES.SET_BLOGS, blogsArray);
