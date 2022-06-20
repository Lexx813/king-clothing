import BlogCard from "../blog-card/blog-card.component";

const BlogPreview = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <div></div>
    </div>
  );
};

export default BlogPreview;
