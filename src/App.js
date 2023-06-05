import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//initial dummy data in expenses list
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Hand Towel",
    amount: 115,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 38000, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Health Bills",
    amount: 170000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 5000,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e5",
    title: "Washing Machine",
    amount: 32000,
    date: new Date(2022, 1, 11),
  },
];

//main APP FUNCTION//
const App = () => {
  //declaring useState
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //adding expense handler funciton in APP.JS
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />;
      <Expenses items={expenses} />;
    </div>
  );
};

export default App;
