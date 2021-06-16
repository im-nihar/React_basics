import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';

import './Expenses.css'
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  })

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
      {/* {filteredExpenses.length === 0 ? <p>No Expenses found.</p> : filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      {/* {expensesContent} */}
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;