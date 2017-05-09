import css from "./root.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root_reducer";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard";

const store = createStore(rootReducer);
//console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
