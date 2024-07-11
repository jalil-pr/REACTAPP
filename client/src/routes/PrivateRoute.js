import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loading from "../pages/loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token, loading } = useSelector((state) => state.auth);
  if(loading){
    return <Loading/>;
}
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
