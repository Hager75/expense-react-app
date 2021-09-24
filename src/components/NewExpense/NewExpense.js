import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import React, { useState } from 'react';
const NewExpense = (props) => {
    const [switchForm, setswitchForm] = useState(false);
    const saveExpenseData = (formData) => {
        const expenseData = {
            ...formData,
            id: Math.random().toString()
        }
        props.onAdd(expenseData);
        // console.log(expenseData);
    };

    // const saveExpenseDataHandler = (enteredExpenseData) => {
    //     const expenseData = {
    //       ...enteredExpenseData,
    //       id: Math.random().toString()
    //     };
    //     // props.onAddExpense(expenseData);
    //   };
    const openForm = ()=>{
        setswitchForm(true);
    }
    const hideForm = ()=>{
        setswitchForm(false);
    }

    return (
        <div className='new-expense'>
      {!switchForm && (
        <button onClick={openForm}>Add New Expense</button>
      )}
      {switchForm && (
     <ExpenseForm onSubmitForm={saveExpenseData} onCancel={hideForm}></ExpenseForm>
      )}
    </div>
        // <div className="new-expense">

        // {!switchForm &&  (<ExpenseForm onSubmitForm={saveExpenseData}></ExpenseForm>)}
        // { switchForm &&
        //    (
        //     <ExpenseForm onSubmitForm={saveExpenseData}></ExpenseForm>
        //     {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
        //    ) 
        // }
        // </div>
     
    );
}
export default NewExpense;