import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const expandHandler = () => {
    setExpanded(true);
  };

  const undoExpandHandler = () => {
    setExpanded(false);
  };

  const saveExpenseHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onNewExpenseAdded(expenseData);
  };

  return (
    <div className="new-expense">
      {!isExpanded && <button onClick={expandHandler}>Add New Expenses</button>}
      {isExpanded && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={undoExpandHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
