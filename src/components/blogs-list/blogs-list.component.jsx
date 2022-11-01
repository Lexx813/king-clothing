import { Link } from "react-router-dom";

import BlogList from "../blog-list/blog-list.component";

const BlogsList = ({ userName, contents }) => {
  return (
    <div>
      {contents.map(content => {
        return (
          <div key={content.id}>
            <BlogList id={content.id} userName={userName} content={content} />
            <Link to={userName}>continue reading</Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsList;
