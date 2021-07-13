const showTabReducer = (state = false, action) => {
  switch (action.type) {
    default:
      return !state;
  }
};

export default showTabReducer;
