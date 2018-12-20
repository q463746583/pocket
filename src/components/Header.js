import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "../action/auth";

const Header = ({ startLogOut }) => (
  <header>
    <h1>Pocket Book</h1>
    <NavLink to="/home" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
    <button onClick={startLogOut}>Log Out</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogOut: () => dispatch(startLogOut())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
