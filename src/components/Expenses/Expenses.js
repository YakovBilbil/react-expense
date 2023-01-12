import "./Expenses.css";

import ExpenseItem from "../ExpenseItem/ExpenseItem.js";
import Card from "../Card/Card.js";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
};

export default Expenses;
