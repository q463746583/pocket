import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../action/auth";

const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__container">
        <Link className="header__title" to="/home">
          <h1>C.expenses</h1>
        </Link>
        <button className="button__logOut" onClick={startLogout}>
          Log Out
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
