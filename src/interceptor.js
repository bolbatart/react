import axios, {CancelToken} from 'axios';
import history from './history';
import { store } from './store/store';
import { logout } from './store/actions/auth/logout';

function refreshTokens() {
  return new Promise( (resolve, reject) => {
    axios.post('http://localhost:3000/auth/refresh', {}, {withCredentials:true})
      .then( (res) => {
        resolve(res.data)
      })
      .catch( (err) => {
        reject(err)
      })
  })
}

export const responseInterceptor = () => {
  axios.interceptors.response.use( (response) => {
    // Return a successful response back to the calling service
    return response;
  }, (error) => {
    // Return any error which is not due to authentication back to the calling service
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // Try request again with new token
    return refreshTokens()
      .then(() => {
        return new Promise((resolve, reject) => {
          axios.request(error.config).then(response => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
        });

      })
      .catch((error) => {
        return new Promise((resolve, reject) => {
          store.dispatch(logout())
          reject(error)
        });
      });


  });

}