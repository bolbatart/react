const initialState = {
  project: {}
};

const projectReducer = (state = initialState, action) => {
  const newState = { ...state };
  
  switch (action.type) {
    case "ADD_TO_REDUX_STATE_PROJECT":
      newState.project = action.value;
      break;
    case "REMOVE_FROM_REDUX_STATE_PROJECT":
      newState.project = {};
      break;
  }
  return newState;
};


export default projectReducer;