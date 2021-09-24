import './ExpenseForm.css';
import React, { useState } from 'react';
const ExpenseForm = (props)=>{
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
    // const [userInputs, setUserInputs] =  useState({
    //     title : '',
    //     amount : '',
    //     date : ''
    // });
    const titleHandller=(event)=>{ 
        setTitle(event.target.value);
        // setUserInputs((userInputs)=>{
        //    return{...userInputs,
        // title :  event.target.value}; 
        // })
    };
    const amountHandller=(event)=>{ 
        setAmount(event.target.value);
        // setUserInputs((userInputs)=>{
        //     return{...userInputs,
        //  amount :  event.target.value}; 
        //  })
    };
    const dateHandller=(event)=>{ 
        setDate(event.target.value);
        // setUserInputs((userInputs)=>{
        //     return{...userInputs,
        //  date :  event.target.value}; 
        //  })
    };
    const addHandller=(event)=>{ 
        console.log(title,amount,date);
        // console.log(userInputs);

    };
    const submitHandller = (event)=>{
        event.preventDefault();
        const newExpenseData = {
            title : title,
            amount : +amount,
            date: new Date(date)
        }
        // console.log(newExpenseData);
        props.onSubmitForm(newExpenseData);
        // props.onSaveExpenseData(newExpenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }
    return(
        <form onSubmit={submitHandller}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={title} onChange={titleHandller}/>
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'  value={amount} onChange={amountHandller}
           
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31' value={date} onChange={dateHandller}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          {/* <button type='button' onClick={addHandller}>Add Expense</button> */}
          <button type='submit'>Add Expense</button>
          <button type='button' onClick={props.onCancel}>cancel</button>
        </div>
</form>
    );
}
export default ExpenseForm ;
