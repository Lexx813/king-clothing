import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchBlogsAsync } from "../../store/blog/blog.action";

import BlogsPreview from "../blog-preview/blogs-preview.component";

const BlogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogsAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<BlogsPreview />} />
    </Routes>
  );
};

export default BlogPage;
