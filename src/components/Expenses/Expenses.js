import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  //useState declaration for filters//
  const [filteredYear, setFilteredYear] = useState("2023");

  //Filter Handler Function//
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //filtering Year vise in Year Selector menu
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
