import BlogCard from "../blog-card/blog-card.component";

const BlogPreview = ({ blogs, userName }) => {
  return (
    <div>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blogs} />
      ))}
      <div></div>
    </div>
  );
};

export default BlogPreview;
