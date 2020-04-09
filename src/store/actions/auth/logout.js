import axios from "axios";
import history from '../../../history' 


export const fetching = () => {
  return {
    type: "LOGOUT_FETCHING"
  };
};

export const logoutSuccess = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};

export const logoutFailure = (value) => {
  return {
    type: "LOGOUT_FAILURE",
    value
  };
};


export const logout = () => {
  return (dispatch) => {
    dispatch(fetching())
      axios.get('http://localhost:3000/auth/logout', { withCredentials:true })
        .then(res => {
          dispatch(logoutSuccess())
          history.push('/')
        })
        .catch(err => {
          dispatch(logoutFailure(err.response.data.message))
        })
  };
};
