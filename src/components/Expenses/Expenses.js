import { useState } from "react";

import "./Expenses.css";

import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../Card/Card.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import React from "react";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
