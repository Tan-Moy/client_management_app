import css from "./root.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/root_reducer";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
