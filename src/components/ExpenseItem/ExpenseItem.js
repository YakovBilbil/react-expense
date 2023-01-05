import "./ExpenseItem.css";
import "./__description/ExpenseItem__description.css";
import "./__price/ExpenseItem__price.css";

import ExpenseDate from "../ExpenseDate/ExpenseDate.js";

function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
