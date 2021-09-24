import logo from './logo.svg';
import './App.css';
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';
const dummy = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  
  const [expenses, setExpenses] = useState(dummy);
  // const takeNewExpenseData = (newData)=>{
  //   expense.push(newData); 
  //   console.log(expense);
  // }
  const takeNewExpenseData = (newData)=>{
    setExpenses([newData , ...expenses]);
    // expense.push(newData); 
    // console.log(expense);
  }
  return (
    <div>
      <NewExpense onAdd={takeNewExpenseData}></NewExpense>
    <Expenses items={expenses}/>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React and more 
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
