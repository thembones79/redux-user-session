import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import { LOGGED_IN, LOGGED_OUT } from "./actions";

const INITIAL_STATE = { user: null };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, user: action.user };
    case LOGGED_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
