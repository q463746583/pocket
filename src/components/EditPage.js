import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {
  startEditExpense,
  editExpense,
  startRemoveExpenses
} from "../action/expenses";

const EditPage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(startEditExpense(props.match.params.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={e => {
          props.dispatch(startRemoveExpenses({ id: props.match.params.id }));
          props.history.push("/");
        }}>
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};
export default connect(mapStateToProps)(EditPage);
