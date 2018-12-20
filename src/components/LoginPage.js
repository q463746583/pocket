import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../action/auth";

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout_box">
      <h1 className="box-layout_title"> Cexpenses</h1>
      <p> Record your expenses</p>
      <button onClick={startLogin}> Login </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
