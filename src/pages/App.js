import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/global/Header";
import AddTask from "../components/view/AddTask";
import Tasks from "../components/view/Tasks";
import About from "./About";

function App() {
  const [showTab, setShowTab] = useState(false);

  const Container = styled.div`
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  `;

  return (
    <Router>
      <Container>
        <Header onToggle={() => setShowTab(!showTab)} showTab={showTab} />
        {showTab && <AddTask />}
        <Route path="/" exact component={Tasks} />
        <Route path="/about" component={About} />
      </Container>
    </Router>
  );
}

export default App;
