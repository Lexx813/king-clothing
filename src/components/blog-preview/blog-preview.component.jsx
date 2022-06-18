import BlogCard from "../blog-card/blog-card.component";

const BlogPreview = ({ blogs }) => {
  return (
    <div>
      <h2>
        <h1>{blogs.userName}</h1>
      </h2>
      <div></div>
    </div>
  );
};

export default BlogPreview;
