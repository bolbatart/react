import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { persistStore } from 'redux-persist';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))  
);

export const persistor = persistStore(store);
