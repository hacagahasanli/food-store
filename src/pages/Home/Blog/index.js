import {
  BlogSection,
  Container,
  RowHelper,
  PostBlog,
  TitleBlog,
} from "../index";

const Blog = () => {
  const array = [<TitleBlog />, <PostBlog />];
  return (
    <BlogSection>
      <Container>
        {array.map((item, index) => (
          <RowHelper key={index}>{item}</RowHelper>
        ))}
      </Container>
    </BlogSection>
  );
};

export default Blog;
