import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js"

import { App } from "./components/App";
import { reducer } from "./store/reducers";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const action = type => store.dispatch({ type });
document.addEventListener('DOMContentLoaded', function() {
  const options = {};
  const elems = document.querySelectorAll('select');
  M.FormSelect.init(elems, options);
});
