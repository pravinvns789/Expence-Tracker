import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing,setEditing]=useState(false);
  const SaveExpenseHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expense);
    setEditing(false);
  };    
  const startEditingHandler=()=>{
    setEditing(true);
  };
  const stopEditingHandler=()=>{
    setEditing(false);
  }
  return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add Expence</button>}
      {isEditing && <ExpenseForm onSaveExpense={SaveExpenseHandler} onCancel={stopEditingHandler  }/>}
    </div>
  );
};

export default NewExpense;
