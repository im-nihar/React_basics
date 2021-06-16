import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
  const { expenses } = props;
  return (
    //   <div className='expense-item'>
    //     <ExpenseDate date={props.date} />
    //     <div className='expense-item__description'>
    //       <h2>{props.title}</h2>
    //       <div className='expense-item__price'>${props.amount}</div>
    //     </div>
    //   </div>
    <Card className='expenses'>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;