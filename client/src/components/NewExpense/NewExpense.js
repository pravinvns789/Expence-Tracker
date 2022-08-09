import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const SaveExpenseHandler=(inputData)=>{
        const expense={
            ...inputData,id:Math.random().toString()
        }
        props.onSaveExpense(expense);

    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={SaveExpenseHandler}/>
            
            
        </div>
    );
}

export default NewExpense;
