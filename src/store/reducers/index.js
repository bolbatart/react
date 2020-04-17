import { combineReducers } from 'redux';
import authReducer from './authentication';
import projectReducer from './project';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
  key: 'root',
  storage,
  whitelsit: ['authReducer']
};

const persistEditProjectConfig = {
  key: 'root',
  storage,
  whitelsit: ['projectReducer']
};

const rootReducer = combineReducers({
  authReducer: persistReducer(persistAuthConfig, authReducer),
  projectReducer: persistReducer(persistEditProjectConfig, projectReducer)
});

// export default persistReducer({}, rootReducer);
export default rootReducer;