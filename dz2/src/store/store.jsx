import { createStore, combineReducers, applyMiddleware,  compose } from 'redux';
import { thunk } from 'redux-thunk';
import { AppReducer, hookReducer } from '../reducer';

const reducer = combineReducers({
    app: AppReducer,
    hook: hookReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  
