import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  const Container = styled.div`
    margin-top: 30px;
    text-align: center;
  `;
  return (
    <Container>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </Container>
  );
};

export default About;
