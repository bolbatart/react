const initialState = {
  loading: false,
  loggedIn: false,
  error: '',
  loginError: '',
  registerError: '',
  forgotPasswordError: ''
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  
  switch (action.type) {
   
    case "LOGIN_FETCHING":
      newState.loading = true;
      break;
    case "LOGIN_SUCCESS":
      newState.loggedIn = action.value._id;
      newState.loading = false;
      newState.loginError = '';
      break;
    case "LOGIN_FAILURE":
      newState.loginError = action.value;
      newState.loading = false;
      break;
    
    case "LOGOUT_FETCHING":
      newState.loading = true;
      break;
    case "LOGOUT_SUCCESS":
      newState.loggedIn = false;
      newState.loading = false;
      break;
    case "LOGOUT_FAILURE":
      newState.loading = false;
      break;
    
    case "REGISTER_FETCHING":
      newState.loading = true;
      break;
    case "REGISTER_SUCCESS":
      newState.loggedIn = action.value._id;
      newState.loading = false;
      newState.registerError = '';
      break;
    case "REGISTER_FAILURE":
      newState.registerError = action.value;
      newState.loading = false;
      break;
    
    case "FORGOT_PASSWORD_FETCHING":
      newState.loading = true;
      break;
    case "FORGOT_PASSWORD_SUCCESS":
      newState.loading = false;
      newState.forgotPasswordError = '';
      break;
    case "FORGOT_PASSWORD_FAILURE":
      newState.forgotPasswordError = action.value;
      newState.loading = false;
      break;
  }
  return newState;
};


export default reducer;