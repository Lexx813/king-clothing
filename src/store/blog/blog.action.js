import { BLOGS_ACTION_TYPES } from "./blog.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getBlogsAndDocuments } from "../../utils/firebase/firebase.utils";

// export const setBlogs = blogsArray =>
//   createAction(BLOGS_ACTION_TYPES.SET_BLOGS, blogsArray);

export const fetchBlogsStart = () =>
  createAction(BLOGS_ACTION_TYPES.FETCH_BLOGS_START);

export const fetchBlogsSuccess = blogsArray =>
  createAction(BLOGS_ACTION_TYPES.FETCH_BLOGS_SUCCESS, blogsArray);

export const fetchBlogsFailed = error =>
  createAction(BLOGS_ACTION_TYPES.FETCH_BLOGS_FAILED, error);

export const fetchBlogsAsync = () => async dispatch => {
  dispatch(fetchBlogsStart());
  try {
    const blogsArray = await getBlogsAndDocuments("blogs");
    dispatch(fetchBlogsSuccess(blogsArray));
  } catch (error) {
    dispatch(fetchBlogsFailed(error));
  }
};
