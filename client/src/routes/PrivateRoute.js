import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children, ...rest }) => {
  const { token, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loading />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
