import axios from "axios";
import history from '../../../history' 



export const addToReduxStateProject = (value) => {
  return {
    type: "ADD_TO_REDUX_STATE_PROJECT",
    value
  };
};

export const removeFromReduxStateProject = () => {
  return {
    type: "REMOVE_FROM_REDUX_STATE_PROJECT"
  };
};

