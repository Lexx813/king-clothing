import { useSelector } from "react-redux";

import BlogPreview from "../../components/blog-preview/blog-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectBlogsMap,
  selectBlogsIsLoading,
} from "../../store/blog/blog.selectors";

import { BlogContainer } from "./blogs-preview.styles";

const BlogsPreview = () => {
  const blogsMap = useSelector(selectBlogsMap);
  const isLoading = useSelector(selectBlogsIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <BlogContainer>
          {Object.keys(blogsMap).map(userName => {
            const blog = blogsMap[userName];
            return <BlogPreview key={userName} blogs={blog} />;
          })}
        </BlogContainer>
      )}
    </>
  );
};

export default BlogsPreview;
