import { Link } from "react-router-dom";

import { Title, SubjectContainer } from "./blog-card.styles";

const BlogCard = ({ blog }) => {
  const { name, imageUrl, title, description, subject } = blog;
  const slice = subject;
  let textChopped = slice.slice(0, 200) + "...";
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <p>Written by: {name}</p>
      <span>{description}</span>
      <SubjectContainer>
        <p>{textChopped}</p>
        <Link to='/'>Continue Reading</Link>
      </SubjectContainer>
    </div>
  );
};

export default BlogCard;
