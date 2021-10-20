import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


function CpProtectedRoute({ component: Component, ...restOfProps }) {
  const bundle = useSelector(state => state.auth);
  const isCp = bundle.user.role == "COMPANY";
  const isLog = bundle.isLoggedIn;
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (isLog && isCp) ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default CpProtectedRoute;