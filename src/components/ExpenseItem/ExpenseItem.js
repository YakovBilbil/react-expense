import { useState } from "react";

import "./ExpenseItem.css";
import "./__description/ExpenseItem__description.css";
import "./__price/ExpenseItem__price.css";

import ExpenseDate from "../ExpenseDate/ExpenseDate.js";
import Card from "../Card/Card.js";

const ExpenseItem = ({ title, amount, date }) => {
  const [currentTitle, setCurrentTitle] = useState(title);

  const clickHandler = () => {
    setCurrentTitle("Updated!");
    console.log(currentTitle);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{currentTitle}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
