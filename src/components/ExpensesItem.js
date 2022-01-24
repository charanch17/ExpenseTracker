import Card from "./card"
import ExpenseDate from "./ExpenseDate"
import './ExpensesItem.css'

const ExpensesItem =(props)=>{
    const {date,name,price}=props.item
    return(
        <Card className='itemcard'>
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expensename">
                {name}   
            </div>
            <h1>{price}</h1>
        </Card>
    )
}
export default ExpensesItem