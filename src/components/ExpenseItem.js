import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from'./ExpenseDate';
import Card from './UI/Card';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const clickHandler = () => 
  {
    setTitle('updated');
    setAmount('updated amount to 0');
  }  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={clickHandler}>Add</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;