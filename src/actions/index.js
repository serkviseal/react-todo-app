import axios from "axios";

export const fetchTasks = () => (dispatch) => {
  axios
    .get(`http://localhost:5000/tasks`)
    .then((groups) => {
      dispatch({
        type: "FETCHING",
        payload: groups.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: "ERROR",
        payload: e,
      });
    });
};

export const addingTask = (data) => (dispatch) => {
  axios
    .post(`http://localhost:5000/tasks`, data)
    .then((groups) => {
      dispatch({
        type: "ADD_TASK",
        payload: groups.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: "ERROR",
        payload: e,
      });
    });
};
export const deleteTask = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/tasks/${id}`)
    .then((groups) => {
      dispatch({
        type: "ADD_TASK",
        payload: groups.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: "ERROR",
        payload: e,
      });
    });
};
