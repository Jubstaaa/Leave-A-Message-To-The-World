import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated === props.location.state ? (
        <div>
          {console.log(isAuthenticated)}
          <Component {...props} />
        </div>
      ) : (
        <>
          <Redirect to="/" />
          {alert(
            `You can only edit your own message. If you think there is a problem contact the admin "github.com/Jubstaaa"`
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
