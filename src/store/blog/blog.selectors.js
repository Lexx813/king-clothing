import { createSelector } from "reselect";

export const selectBlogsMap = state => state.blog.blogsMap;

// export const selectBlogs = createSelector(
//   [selectBlogsReducer],
//   blogsSlice => blogsSlice.blogs
// );

// export const selectBlogsMap = createSelector([selectBlogs], blogs =>
//   blogs.reduce((acc, blog) => {
//     const { userName, content } = blog;
//     acc[userName.toLowerCase()] = content;
//     return acc;
//   }, {})
// );

// export const selectBlogsIsLoading = createSelector(
//   [selectBlogsReducer],
//   blogsSlice => blogsSlice.isLoading
// );
