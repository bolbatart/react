import axios from "axios";
import history from '../../../history' 


export const registerFetching = () => {
  return {
    type: "REGISTER_FETCHING"
  };
};

export const registerSuccess = (value) => {
  return {
    type: "REGISTER_SUCCESS",
    value
  };
};

export const registerFailure = (value) => {
  return {
    type: "REGISTER_FAILURE",
    value
  };
};

export const register = (credentials, handleClose) => {
  return (dispatch) => {
    dispatch(registerFetching())
    axios.post('http://localhost:3000/auth/register', credentials, { withCredentials:true })
      .then(res => {
        dispatch(registerSuccess(res.data))
        handleClose()
        history.push('/')
      })
      .catch(err => {
        if (err.response.status == 400) {
          console.log(typeof(err.response.data.message))
          if (typeof(err.response.data.message) !== 'object')
            dispatch(registerFailure(err.response.data.message))
          else dispatch(registerFailure('All input fields must not be empty')) 
        } else dispatch(registerFailure('Server error, try again'))
      })
  };
};

