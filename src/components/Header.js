import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import { login } from "../actions/auth";

const Header = (props) => {
  return (
    <header>
      <nav className=" navbar  navbar-expand-sm navbar-dark bg-primary">
        <div className="container justify-content-center justify-content-sm-between">
          <NavLink className="nav-link navbar-brand" to="/">
            Leave a Message to The World
          </NavLink>
          {props.isAuthenticated ? (
            <div>
              <ul className="d-flex  flex-row  align-middle navbar-nav ml-auto  ">
                <li className="  align-items-center justify-content-end ">
                  <img
                    style={{ maxWidth: "40%" }}
                    className="img-fluid rounded-circle"
                    src={props.auth.photoUrl}
                    alt="Google Profile Picture"
                  />
                </li>
                <li className="nav-item ">
                  <button
                    className=" btn btn-secondary p-2 btn-sm nav-link align-middle "
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn btn-warning " onClick={login}>
                Login
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.uid,
  };
};

export default connect(mapStateToProps)(Header);
