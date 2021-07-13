import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../reusable/Button";

const Header = ({ title, onToggle, showTab }) => {
  const location = useLocation();

  const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  `;

  return (
    <Container>
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showTab ? "red" : "green"}
          text={showTab ? "Close" : "Add"}
          onClick={onToggle}
        />
      )}
    </Container>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
