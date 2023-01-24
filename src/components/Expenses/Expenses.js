import { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "../ExpenseItem/ExpenseItem.js";
import Card from "../Card/Card.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import React from "react";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {items.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
