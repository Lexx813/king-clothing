import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getBlogsAndDocuments } from "../../utils/firebase/firebase.utils";
import { setBlogsMap } from "../../store/blog/blog.action";

import BlogsPreview from "../blog-preview/blogs-preview.component";

const BlogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getBlogs = async () => {
      const blogMap = await getBlogsAndDocuments("blogs");
      dispatch(setBlogsMap(blogMap));
    };
    getBlogs();
  }, []);
  return (
    <Routes>
      <Route index element={<BlogsPreview />} />
    </Routes>
  );
};

export default BlogPage;
