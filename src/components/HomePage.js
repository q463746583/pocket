import React from "react";
import ExpenseList from "./ExpenseList";
import Filters from "./Filters";
import SummaryAmount from "./SummaryAmount";

const HomePage = () => (
  <div>
    <SummaryAmount />
    <Filters />
    <ExpenseList />
  </div>
);

export default HomePage;
