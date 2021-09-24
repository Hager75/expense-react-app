import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from 'react';
import './Expenses.css'
import Card from './UI/Card';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    //filter all data and return the date = the filtered year
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let filterExpenseContent = <p>no content found</p>
    if (filteredExpenses.length > 0) {
        filterExpenseContent =
         filteredExpenses.map((item) => (
         <ExpenseItem 
         key={item.id} 
         title={item.title} 
         amount={item.amount}
          date={item.date}/>));

    };


    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
{filterExpenseContent}
            {/* for (const prop of props)  {
              <ExpenseItem title={props.items.title} amount ={props.items.amount} date={props.items.date}></ExpenseItem>

            } */}
            {/* {filteredExpenses.map((item) => ( <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)
 )} */}

            {/* {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
        </Card>
    )
}

export default Expenses;