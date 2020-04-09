import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/store';

import Profile from './views/Profile'
import Home from './views/Home'
import ResetPassword from './views/ResetPassword'


class App extends React.Component {

  
  render () {
    return (
      <Provider store={store}>  
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Router history={history}>
              <Route path='/' exact component={Home} />
              <Route path='/profile' exact component={Profile} /> 
              <Route path='/reset' component={ResetPassword} />
            </Router>
          </div>
        </PersistGate>
     </Provider>
    )
  }
}

export default App;