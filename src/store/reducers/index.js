import { combineReducers } from 'redux';
import authReducer from './authentication';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelsit: ['authReducer']
};

const rootReducer = combineReducers({
  authReducer: persistReducer(persistConfig, authReducer) 
});

// export default persistReducer({}, rootReducer);
export default rootReducer;