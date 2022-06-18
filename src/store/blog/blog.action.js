import { BLOGS_ACTION_TYPES } from "./blog.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setBlogsMap = blogsMap =>
  createAction(BLOGS_ACTION_TYPES.SET_BLOGS_MAP, blogsMap);
