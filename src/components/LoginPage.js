import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../action/auth";

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <button onClick={startLogin}> Login </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
