import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { createStore } from "redux";
import { counter } from "./reducers/counter.js";
import { Provider } from "react-redux";

const store = createStore(counter);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
