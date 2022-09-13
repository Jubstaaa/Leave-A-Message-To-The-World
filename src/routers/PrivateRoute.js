import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated === "CuAvKmPxuwen97wHRLJ35JJYppr2" &&
      "ve1cb2xmifb17pDJyZK7JSL5BXF3" ? (
        <div>
          {console.log(isAuthenticated)}
          <Component {...props} />
        </div>
      ) : (
        <>
          <Redirect to="/" />
          {console.log(isAuthenticated)}
          {alert(
            "Only Admins Can Edit Messages Please Contact github.com/Jubstaaa"
          )}
        </>
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
