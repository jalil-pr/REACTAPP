import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../components/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import Landing from "../pages/Landing";
import Login from "../components/Login/Login";


const Routes = () => (
  <Switch>
    <Route exact path={["/"]}>
      <Home />
    </Route>

    <Route exact path={["/login"]}>
      <Login />
    </Route>

    <Route exact path={["/register"]}>
      <Registration />
    </Route>
    <PrivateRoute path="/landing">
      <Landing />
    </PrivateRoute>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
