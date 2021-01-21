import styled from "@emotion/styled";

const Container = styled.section`
  padding: 3rem 7rem;

  .main-heading {
    margin-bottom: 2rem;
    font-size: 3.2rem;
  }
`;

const Terms = () => {
  return (
    <Container>
      <h1 className="main-heading">Terms and conditions</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quasi
        autem tenetur praesentium aliquam nisi rerum veritatis ipsum voluptatem
        laudantium, fuga illum maiores neque fugit facilis minima ut ipsam in.
      </p>
    </Container>
  );
};

export default Terms;
