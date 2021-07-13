const initialState = {
  tasks: [],
  task: [],
  error: null,
};
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, tasks: action.payload };

    case "ADD_TASK":
      return { ...state, task: action.payload };

    case "ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default tasksReducer;
