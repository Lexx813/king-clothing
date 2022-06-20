import { createSelector } from "reselect";

export const selectBlogReducer = state => state.blog;

export const selectBlogs = createSelector(
  [selectBlogReducer],
  blogsSlice => blogsSlice.blogs
);

export const selectBlogsMap = createSelector([selectBlogs], blogs =>
  blogs.reduce((acc, blog) => {
    const { userName, content } = blog;
    acc[userName.toLowerCase()] = content;
    return acc;
  }, {})
);

export const selectBlogsIsLoading = createSelector(
  [selectBlogReducer],
  blogsSlice => blogsSlice.isLoading
);
