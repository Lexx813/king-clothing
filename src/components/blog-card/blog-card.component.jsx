import { Title, SubjectContainer } from "./blog-card.styles";

const BlogCard = ({ blog }) => {
  const { subject, description, title, imageUrl } = blog;
  // const subjectSliced = subject;
  // let subjectChopped = subjectSliced.slice(0, 200) + "...";
  console.log(blog);
  return (
    <div>
      <img src={imageUrl} alt='data' />
      <Title>{title}</Title>
      <p>{description}</p>
      <span></span>

      <SubjectContainer>
        <p>{subject}</p>
      </SubjectContainer>
    </div>
  );
};

export default BlogCard;
