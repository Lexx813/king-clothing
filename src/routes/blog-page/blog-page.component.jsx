import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getBlogsAndDocuments } from "../../utils/firebase/firebase.utils";
import { setBlogs } from "../../store/blog/blog.action";

import BlogsPreview from "../blog-preview/blogs-preview.component";

const BlogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getBlogsMap = async () => {
      const blogsArray = await getBlogsAndDocuments("blogs");
      dispatch(setBlogs(blogsArray));
    };
    getBlogsMap();
  }, []);
  return (
    <Routes>
      <Route index element={<BlogsPreview />} />
    </Routes>
  );
};

export default BlogPage;
