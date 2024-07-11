import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const Routes = () => (
  <Switch>
    <Route exact path={["/login", "/"]}>
      <Login />
    </Route>
    <Route exact path={["/register"]}>
      <Registration />
    </Route>

    <PrivateRoute exact path="/home" component={<Home />} />
   

    <Route path="*">
      <Login />
    </Route>
  </Switch>
);

export default Routes;
