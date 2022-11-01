import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectBlogsMap } from "../../store/blog/blog.selectors";

import BlogsList from "../../components/blogs-list/blogs-list.component";

import { fetchBlogsStart } from "../../store/blog/blog.action";

const BlogsPage = () => {
  const dispatch = useDispatch();
  const blogsMap = useSelector(selectBlogsMap);
  useEffect(() => {
    dispatch(fetchBlogsStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {Object.keys(blogsMap).map(userName => {
        const contents = blogsMap[userName];
        return (
          <BlogsList key={userName} userName={userName} contents={contents} />
        );
      })}
    </div>
  );
};

export default BlogsPage;
