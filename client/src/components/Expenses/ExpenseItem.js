import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseTracker = (props) => {
  const [title, setTitle]=useState(props.title);
  const clickHandler=()=>{
    setTitle('Updated');
  };
  

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}/>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> click here</button>
    </Card>
  );
};

export default ExpenseTracker;
