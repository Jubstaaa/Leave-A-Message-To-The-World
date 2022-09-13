import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import MessageListPage from "../components/MessageListPage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import EditMessagePage from "../components/EditMessagePage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={MessageListPage} />
          <PrivateRoute exact path="/edit/:id" component={EditMessagePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
