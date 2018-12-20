import uuid from "uuid";
import database from "../firebase/firebase";
// ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    const path = `user/${uid}/expenses`;
    database
      .ref(path)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpenses = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// Start to remove_expenses
export const startRemoveExpenses = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`user/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpenses({ id }));
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});

// START EDIT_EXPENSE
export const startEditExpense = (id, update) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`user/${uid}/expenses/${id}`)
      .update(update)
      .then(() => {
        dispatch(editExpense(id, update));
      });
  };
};

// SET_EXPENSE
export const setExpenses = expenses => ({
  type: "SET_EXPENSE",
  expenses
});

// Start SET_EXPENSE
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};
