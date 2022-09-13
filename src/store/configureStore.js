import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import blogReducer from "../reducers/messages";
import authReducer from "../reducers/auth";
import thunk from "redux-thunk";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      messages: blogReducer,
      auth: authReducer,
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnchancers(applyMiddleware(thunk))
  );
  return store;
};
