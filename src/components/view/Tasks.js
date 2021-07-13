import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks,deleteTask } from "../../actions";
import Footer from "../global/Footer";
import Task from "./Task";

const Tasks = () => {
  const myTasks = useSelector((state) => state.tasks.tasks);
  const myTask = useSelector((state) => state.tasks.task);
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch, myTask]);
  

  //Delete task
  const deletes =  (id) => {
    dispatch(deleteTask(id))
  };

  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json;

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };

  return (
    <>
      {myTasks?.length > 0
        ? myTasks?.map((task, index) => (
            <Task
              key={`task-${index + 1}`}
              task={task}
              onDelete={deletes}
              onToggle={toggleReminder}
            />
          ))
        : "No Tasks To Show"}
      <Footer />
    </>
  );
};

export default Tasks;
