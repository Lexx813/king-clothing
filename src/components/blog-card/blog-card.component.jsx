import { Link } from "react-router-dom";

import { Title, SubjectContainer } from "./blog-card.styles";

const BlogCard = ({ blog }) => {
  const { imageUrl, title, description, subject } = blog;
  const slice = subject;
  let result = slice.slice(0, 200) + "...";
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <span>{description}</span>
      <SubjectContainer>
        <p>{result}</p>
        <Link to='/auth'>Continue Reading</Link>
      </SubjectContainer>
    </div>
  );
};

export default BlogCard;
