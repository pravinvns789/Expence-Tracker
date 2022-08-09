import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilter] = useState("2022");
  const onChooseHandler = (choosenYear) => {
    setFilter(choosenYear);
  };
  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  let expenseContent = <p>No Expense found</p>;
  if (filteredYear.length > 0) {
    expenseContent = filteredYear.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={filterYear} onChoose={onChooseHandler} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
