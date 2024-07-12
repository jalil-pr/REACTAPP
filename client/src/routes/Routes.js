import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import Landing from "../pages/Landing";

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
    {/* <PrivateRoute exact path={["/landing"]} element={<NotFound />} >
        
    </PrivateRoute> */}
    <PrivateRoute path="/landing">
      <Landing />
    </PrivateRoute>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
