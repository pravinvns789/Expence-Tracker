import React from "react";
import "./ExpenseItem.css";

const ExpenseTracker = () => {
  const expenseDate = new Date(2022, 7, 29);
  const expenseTitle = "Car Insurence";
  const expenseAmount = 236.5;
  return (
    <div className="expense-item">
      <div>{expenseDate.toString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
