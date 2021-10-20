import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


function ProtectedRoute({ component: Component, ...restOfProps }) {
  const bundle = useSelector(state => state.auth)
  const isLog = bundle.isLoggedIn;
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLog ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;