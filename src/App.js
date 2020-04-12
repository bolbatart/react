import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/store';

import ProfilePage from './views/ProfilePage'
import Home from './views/Home'
import ResetPassword from './views/ResetPassword'
import Project from './views/Project';
import Projects from './views/Projects';


class App extends React.Component {

  
  render () {
    return (
      <Provider store={store}>  
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Router history={history}>
              <Route path='/' exact component={Home} />
              <Route path='/profile/:id' exact component={ProfilePage} /> 
              <Route path='/reset/:key' exact component={ResetPassword} />
              <Route path='/projects/:id' exact component={Project} />
              <Route path='/projects' exact component={Projects} />
            </Router>
          </div>
        </PersistGate>
     </Provider>
    )
  }
}

export default App;