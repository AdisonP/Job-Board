import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


function AdminProtectedRoute({ component: Component, ...restOfProps }) {
  const bundle = useSelector(state => state.auth);
  var isCp = false;
  const isLog = bundle.isLoggedIn;
  if(isLog){
    isCp = bundle.user.role.roles == "ADMIN";
  }
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        (isLog && isCp) ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default AdminProtectedRoute;