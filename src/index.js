import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
// import "./styles/styles.scss";
// import "./styles/base/_base.scss";
import configureStore from "./store/configureStore";
import AppRouter, { history } from "./routers/AppRouter";
import { addExpense } from "./action/expenses";
import { login, logout } from "./action/auth";
import { startSetExpenses } from "./action/expenses";
import getVisibleExpenses from "./selectors/expenses";
import { firebase } from "./firebase/firebase";
import "./playground/promises";

ReactDOM.render(<p>This is a paragraph...</p>, document.getElementById("app"));
const store = configureStore();
// store.dispatch(sortByDate());

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
const rootElement = document.getElementById("app");
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(template, rootElement);
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, rootElement);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/home");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

// firebase.auth().onAuthStateChanged(user => {

//   if (user) {
//     store.dispatch(login(user.uid));
//     store.dispatch(startSetExpenses()).then(() => {
//       console.log(user);
//       renderApp();
//       if (history.location.pathname === "/") {
//         console.log("Log in ");
//         console.log(user.uid);
//         history.push("/home");
//       }
//     });
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push("./");
//   }
// });
// store.dispatch(setTextFilter("Water biLL"));
// console.log(store.getState());
// const state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));

// store.dispatch(
//   addExpense({
//     description: "Water Bill",
//     amount: 100,
//     createdAt: 1543453542525
//   })
// );
// store.dispatch(
//   addExpense({ description: "Gas", amount: 30, createdAt: 10000 })
// );
// store.dispatch(
//   addExpense({ description: "Rent Bill", amount: 200, createdAt: 123 })
// );
