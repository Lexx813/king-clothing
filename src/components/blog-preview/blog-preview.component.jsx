import BlogCard from "../blog-card/blog-card.component";

import { BlogContainer } from "./blog-preview.styles";

const BlogPreview = () => {
  const blogs = [
    {
      id: 1,
      name: "Luis",
      title: "My first Blog",
      imageUrl:
        "https://images.unsplash.com/photo-1653762381632-2945469edb7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      subject:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt libero vel fermentum viverra. In hac habitasse platea dictumst. Nullam eu est in lectus cursus sodales a eget ante. Vestibulum lacus lorem, ullamcorper ut leo sit amet, imperdiet rutrum urna. Nulla ultricies lectus nisi, at congue neque laoreet ut. Pellentesque porttitor at elit sit amet consequat. Mauris iaculis non purus sit amet lobortis. Vestibulum dignissim dui at sem lacinia sagittis. Pellentesque commodo eget mi in fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus dignissim venenatis leo sit amet eleifend.",
    },
    {
      id: 2,
      name: "Lexx",
      title: "My second Blog",
      imageUrl:
        "https://images.unsplash.com/photo-1648737966005-f6b62f4d4394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      Description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      subject:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt libero vel fermentum viverra. In hac habitasse platea dictumst. Nullam eu est in lectus cursus sodales a eget ante. Vestibulum lacus lorem, ullamcorper ut leo sit amet, imperdiet rutrum urna. Nulla ultricies lectus nisi, at congue neque laoreet ut. Pellentesque porttitor at elit sit amet consequat. Mauris iaculis non purus sit amet lobortis. Vestibulum dignissim dui at sem lacinia sagittis. Pellentesque commodo eget mi in fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus dignissim venenatis leo sit amet eleifend.",
    },
  ];

  return (
    <BlogContainer>
      <h1>BLOG PAGE</h1>
      <div>
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </BlogContainer>
  );
};

export default BlogPreview;
