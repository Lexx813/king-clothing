const BlogList = ({ userName, content, id }) => {
  const { imageUrl, title, description, subject } = content;
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <span>{title}</span>
      <span>Written by: {userName}</span>
      <h2>{id}</h2>
      <p>{description}</p>
      <p>{subject}</p>
    </div>
  );
};

export default BlogList;
