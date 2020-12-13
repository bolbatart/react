import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import { responseInterceptor } from './interceptor';

import { store, persistor } from './store/store';

import ProfilePage from './views/ProfilePage'
import Home from './views/Home'
import ResetPassword from './views/ResetPassword'
import Project from './views/Project';
import Projects from './views/Projects';
import MyProfile from './views/MyProfile';
import CreateProject from './views/CreateProject';
import EditProject from './views/EditProject';
import ProjectPage from 'views/ProjectPage';
import Layout from 'layout/Layout';
import HomePage from 'views/HomePage';
import MyProfilePage from 'views/MyProfilePage';

// styles
import "./assets/css/bootstrap.min.css";
// import "./assets/css/paper-kit.css";
// import "./assets/demo/demo.css";
import 'assets/css/normalize.css';
import 'assets/css/mystyles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    responseInterceptor();
  }
  

  render () {
    return (
      <Provider store={store}>  
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Router history={history}>
              <Route path='/' exact component={() => <Layout><HomePage /></Layout> } />
              <Route path='/profile/:id' exact component={ProfilePage} /> 
              <Route path='/reset/:key' exact component={ResetPassword} />
              <Route path='/projects/:id' exact component={() => <Layout><ProjectPage /></Layout> } />
              <Route path='/projects' exact component={() => <Layout><Projects /></Layout> } />
              <Route path='/my-profile' exact component={() => <Layout><MyProfilePage /></Layout>} />
              <Route path='/create-project' exact component={CreateProject} />
              <Route path='/edit-project' exact component={EditProject} />
            </Router>
          </div>
        </PersistGate>
     </Provider>
    )
  }
}

export default App;