import { createStore } from "redux";

// const addCount = ({ addBy = 1 } = {}) => ({
//   type: "addOne",
//   addBy;
// });

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "addOne":
      return {
        count: state.count + action.addBy
      };
    case "minsOne":
      const minsBy = typeof action.minsBy === "number" ? action.minsBy : 1;
      return {
        count: state.count - minsBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "reset":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscrible = store.subscribe(() => console.log(store.getState()));
// store.dispatch(addCount({ addBy: 1002 }));
store.dispatch({ type: "addOne" });
store.dispatch({ type: "addOne" });
store.dispatch({ type: "minsOne", minsBy: 30 });
store.dispatch({ type: "SET", count: 1000 });
store.dispatch({ type: "reset" });
unsubscrible();
