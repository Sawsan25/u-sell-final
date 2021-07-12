import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function PrivateRoute({ exact, path, render }) {
  const isAuthenticated = useAuth();
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isAuthenticated ? render(props) : <Redirect to="/admin/login" />
      }
    />
  );
}

export default PrivateRoute;
