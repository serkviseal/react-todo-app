import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ color, text, onClick }) => {
  const Container = styled.button`
    display: inline-block;
    background-color: ${() => color || "steelblue"};
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  `;

  return (
    <Container
      onClick={onClick}
    >
      {text}
    </Container>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
