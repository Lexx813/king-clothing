import { useSelector } from "react-redux";

import BlogPreview from "../../components/blog-preview/blog-preview.component";
// import Spinner from "../spinner/spinner.component";
import { selectBlogs } from "../../store/blog/blog.selectors";

import { BlogContainer } from "./blogs-preview.styles";

const BlogsPreview = () => {
  const blogsMap = useSelector(selectBlogs);
  return (
    <BlogContainer>
      {Object.keys(blogsMap).map(userName => {
        const blogs = blogsMap[userName];
        return <BlogPreview key={userName} blogs={blogs} />;
      })}
    </BlogContainer>
  );
};

export default BlogsPreview;
