import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";
import TotalAmount from "../selectors/TotalAmount";

export const Summary = ({ expensesLength, totalAmount }) => {
  const formatTotalAmount = numeral(totalAmount / 100).format("$0,0.00");
  return (
    <div>
      <p>
        Your {expensesLength} Expense totally {formatTotalAmount}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expensesLength: selectExpenses(state.expenses, state.filters).length,
    totalAmount: TotalAmount(state.expenses)
  };
};

export default connect(mapStateToProps)(Summary);
