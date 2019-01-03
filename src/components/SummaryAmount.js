import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";
import TotalAmount from "../selectors/TotalAmount";

export const Summary = ({ expensesLength, totalAmount }) => {
  const formatTotalAmount = numeral(totalAmount / 100).format("$0,0.00");

  return (
    <div className="summary-header">
      <h3> Summary: </h3>
      <div className="content-container">
        <p className="summary-header__title">
          Your <span>{expensesLength}</span>{" "}
          {expensesLength > 1 ? "expenses" : "expense"} totally{" "}
          <span>{formatTotalAmount}</span>
        </p>
      </div>
      <div className="summary-header__add">
        <Link className="button__add" to="/create">
          {" "}
          Add Expense{" "}
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.expenses);
  return {
    expensesLength: selectExpenses(state.expenses, state.filters).length,
    totalAmount: TotalAmount(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(Summary);
