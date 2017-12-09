import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import { Route, Router } from "react-router-dom";
import reducers from "./reducers/index.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import { routerReducer, routerMiddleware } from "react-router-redux";

const loggerMiddleware = createLogger();
const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware, myRouterMiddleware)
);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
