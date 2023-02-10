import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { countriesReducer } from './reducers/countriesReducer';
import { alertsReducer } from './reducers/alertsReducer';
const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  countriesReducer,
  alertsReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store