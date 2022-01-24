import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/input/NewExpense";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "el1",
      title: "Car Insurance",
      amount: 214.1,
      date: new Date(2022, 2, 10),
    },
    {
      id: "el2",
      title: "Exhaust System",
      amount: 500,
      date: new Date(2022, 4, 10),
    },
    {
      id: "el3",
      title: "Custom ECU",
      amount: 400,
      date: new Date(2022, 6, 22),
    },
    { id: "el4", title: "Tiers", amount: 300, date: new Date(2022, 2, 10) },
  ]);

  const newExpenseAddedHandler = (newExpense) => {
    setExpenses((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onNewExpenseAdded={newExpenseAddedHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
