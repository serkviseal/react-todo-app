import { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { addingTask } from "../../actions";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(true);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Add a task description!");
      return;
    }

    const task = {
      text,
      day,
      reminder,
    };

    dispatch(addingTask(task));

    setText("");
    setDay("");
    setReminder(true);
  };

  const Form = styled.form`
    margin-bottom: 40px;
  `;

  const FormControl = styled.div`
    margin: 20px 0;

    ${(props) =>
      props.check &&
      css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `};
  `;

  const Label = styled.label`
    display: block;

    ${(props) =>
      props.check &&
      css`
        flex: 1;
      `};
  `;

  const Input = styled.input`
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;

    ${(props) =>
      props.check &&
      css`
        flex: 2;
        height: 20px;
      `};
  `;

  return (
    <Form className="add-form" onSubmit={onSubmit}>
      <FormControl>
        <Label>Task</Label>
        <Input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <Label>Day & Time</Label>
        <Input
          type="date"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </FormControl>

      {/* <FormControl check>
        <Label check>Set Reminder</Label>
        <Input check
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </FormControl> */}

      <input type="submit" value="Save Task" className="btn btn-block" />
    </Form>
  );
};

export default AddTask;
