import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilter] = useState("2022");
  const onChooseHandler = (choosenYear) => {
    setFilter(choosenYear);
  };
  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={filterYear} onChoose={onChooseHandler} />
        <ExpensesChart expenses={filteredYear}/>  
        <ExpenseList filteredYear={filteredYear}/>
      </Card>
    </div>
  );
};

export default Expenses;
