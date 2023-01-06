import "./Expenses.css";

import ExpenseItem from "../ExpenseItem/ExpenseItem.js";

function Expenses({ items }) {
  return (
    <div className="expenses">
      {items.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </div>
  );
}

export default Expenses;
