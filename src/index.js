import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./store/configureStore";
import { getMessagesFromDatabase } from "./actions/messages";
import "./firebase/firebaseConfig";
import { firebase } from "./firebase/firebaseConfig";
import { loginAction, logoutAction } from "./actions/auth";
import "bootstrap/dist/css/bootstrap.css";

const store = configureStore();

const result = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="vh-100 d-flex align-items-center justify-content-center">
    <div
      style={{ width: "10rem", height: "10rem" }}
      className="spinner-border text-primary m-5"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(loginAction(user));
    store.dispatch(getMessagesFromDatabase());
    root.render(result);
  } else {
    store.dispatch(getMessagesFromDatabase());
    store.dispatch(logoutAction());
    root.render(result);
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
