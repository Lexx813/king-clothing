import { Title, SubjectContainer } from "./blog-card.styles";

const BlogCard = ({ blogs }) => {
  const [subject] = blogs.content;
  // const subjectSliced = subject;
  // let subjectChopped = subjectSliced.slice(0, 200) + "...";
  console.log(subject);
  return (
    <div>
      <Title>{blogs.userName}</Title>
      <p></p>
      <span></span>
      <SubjectContainer>
        <p></p>
      </SubjectContainer>
    </div>
  );
};

export default BlogCard;
