import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const Container = styled.div`
    margin-top: 30px;
    text-align: center;
  `;
  return (
    <Container>
      <p>Copyright &copy; 2021.</p>
      <Link to="/about">About</Link>
    </Container>
  );
};

export default Footer;
