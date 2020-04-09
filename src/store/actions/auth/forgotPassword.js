import axios from "axios";
import history from '../../../history' 


export const forgotPasswordFetching = () => {
  return {
    type: "FORGOT_PASSWORD_FETCHING"
  };
};

export const forgotPasswordSuccess = () => {
  return {
    type: "FORGOT_PASSWORD_SUCCESS"
  };
};

export const forgotPasswordFailure = (value) => {
  return {
    type: "FORGOT_PASSWORD_FAILURE",
    value
  };
};


export const forgotPassword = (email, handleClose) => {
  return (dispatch) => {
    dispatch(forgotPasswordFetching())
      axios.post('http://localhost:3000/auth/forgot-password', email, { withCredentials:true })
        .then(res => {
          dispatch(forgotPasswordSuccess())
          handleClose()
          history.push('/')
        })
        .catch(err => {
          if (err.response.status == 400) {
            console.log(typeof(err.response.data.message))
            if (typeof(err.response.data.message) !== 'object')
              dispatch(forgotPasswordFailure(err.response.data.message))
            else dispatch(forgotPasswordFailure('All input fields must not be empty and email must be valid')) 
          } else dispatch(forgotPasswordFailure('Server error, try again'))        })
  };
};
