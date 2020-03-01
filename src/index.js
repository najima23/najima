import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App
      testProp={[
        { name: "hallo", id: 0 },
        { name: "fuck", id: 1 },
        { name: "fuck", id: 10 }
      ]}
    />
  </Provider>,
  document.getElementById("root")
);
