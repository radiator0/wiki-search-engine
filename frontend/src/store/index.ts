import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { queryReducer } from './query/reducer';
import { IQueryState } from './query/types';
import thunk from "redux-thunk";
import { loadingBarReducer } from 'react-redux-loading-bar'

export interface IRootState {
    query: IQueryState
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  query:queryReducer,
  loadingBar: loadingBarReducer
}), storeEnhancers(applyMiddleware(thunk)));

export default store;