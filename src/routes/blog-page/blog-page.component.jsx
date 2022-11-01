import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BlogsList from "../../components/blogs-list/blogs-list.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectBlogsMap,
  selectBlogsIsLoading,
} from "../../store/blog/blog.selectors";

const Category = () => {
  const { content } = useParams();
  const blogsMap = useSelector(selectBlogsMap);
  const isLoading = useSelector(selectBlogsIsLoading);
  const [contents, setContents] = useState(blogsMap[content]);

  useEffect(() => {
    setContents(blogsMap[content]);
  }, [content, blogsMap]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {contents &&
            contents.map(content => (
              <BlogsList key={content.id} content={content} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
