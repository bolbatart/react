import axios from "axios";
import history from '../../../history' 


export const loginFetching = () => {
  return {
    type: "LOGIN_FETCHING"
  };
};

export const loginSuccess = (value) => {
  return {
    type: "LOGIN_SUCCESS",
    value
  };
};

export const loginFailure = (value) => {
  return {
    type: "LOGIN_FAILURE",
    value
  };
};


export const login = (credentials, handleClose) => {
  return (dispatch) => {
    dispatch(loginFetching())
      axios.post('http://localhost:3000/auth/login', credentials, { withCredentials:true })
        .then(res => {
          dispatch(loginSuccess(res.data))
          handleClose()
          history.push('/')
        })
        .catch(err => {
          if (err.response.status == 400) {
            console.log(typeof(err.response.data.message))
            if (typeof(err.response.data.message) !== 'object')
              dispatch(loginFailure(err.response.data.message))
            else dispatch(loginFailure('All input fields must not be empty')) 
          } else dispatch(loginFailure('Server error, try again'))
        })
  };
};
