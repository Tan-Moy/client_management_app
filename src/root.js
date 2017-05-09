import css from "./root.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/root_reducer";
import {
    BrowserRouter,
    Route,
    browserHistory,
    IndexRoute
} from "react-router-dom";
import App from "./components/app";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
