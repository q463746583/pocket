import { createStore, combineReducers } from "redux";

// Filters Reducer

// store.subscribe(() => {
//   const state = store.getState();
//   const stateVisible = getVisibleExpenses(state.expenses, state.filters);
//   console.log(stateVisible);
// });

// const expenseOne = store.dispatch(
//   addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
// );

// const expenseTwo = store.dispatch(
//   addExpense({ description: "Coffee", amount: 300, createdAt: 0 })
// );

// store.dispatch(editExpense( expenseTwo.expense.id, {amount: 1000}));
// store.dispatch(removeExpense( {id : expenseOne.expense.id}));
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter({text : "Coffee"}));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1112));

const demoState = {
  expenses: [
    {
      id: "poijasdfhwer",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
