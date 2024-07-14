import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { fetchUserData } from "./store/slices/authThunk";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import AppRoutes from "./routes/Routes";
import { getToken } from "./utils/HelperFunctions";
import history from "./utils/history";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (getToken()) {
  store.dispatch(fetchUserData());
}
root.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
