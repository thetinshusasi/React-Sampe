import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import  initialState from './reducers/initialState'
import { IInitialState } from "../models/interfaces/IStates/IInitialState";
import { composeWithDevTools } from 'redux-devtools-extension';


const configureStore = ( state: IInitialState = initialState ) : any=> {
    const composeEnhancers = composeWithDevTools({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      });
  return createStore(
    rootReducer,
    state,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}

export default configureStore;