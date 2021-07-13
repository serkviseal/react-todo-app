import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Task = ({ task, onDelete, onToggle }) => {
  const TaskContainer = styled.div`
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    border-left: ${() => (task.reminder ? "5px solid green" : "")};
  `;

  const Heading3 = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <TaskContainer onDoubleClick={() => onToggle(task.id)}>
      <Heading3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </Heading3>
      <p>{task.day}</p>
    </TaskContainer>
  );
};

export default Task;
