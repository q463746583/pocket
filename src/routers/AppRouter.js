import React from "react";
import { Router, Switch, Route, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HomePage from "../components/HomePage";
import CreatePage from "../components/CreatePage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/home" component={HomePage} exact={true} />
        <PrivateRoute path="/create" component={CreatePage} />
        <PrivateRoute path="/edit/:id" component={EditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
