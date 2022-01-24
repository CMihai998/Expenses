import "./ExpenseItem.css";
import DateItem from "./DateItem";
import Card from "../containers/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <DateItem date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
