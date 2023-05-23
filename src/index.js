import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/CircularStd-Black.otf";
import "./fonts/CircularStd-Bold.otf";
import "./fonts/CircularStd-Book.otf";
import "./fonts/CircularStd-Medium.otf";
import { SkeletonTheme } from 'react-loading-skeleton';
import { store } from './app/store'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <SkeletonTheme color="#202020" highlightColor="lightgrey">
      <App />
    </SkeletonTheme>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
