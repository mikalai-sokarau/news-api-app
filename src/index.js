import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "materialize-css/dist/css/materialize.min.css";
import materialize from "materialize-css/dist/js/materialize";
import App from "./containers/App";
import { reducer } from "./store/reducers";
import { rootSaga } from "./store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />  
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

materialize.AutoInit();
