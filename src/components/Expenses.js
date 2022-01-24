import Card from "./card"
import ExpensesItem from "./ExpensesItem"
import './Expenses.css'

const Expenses = (props) => {
    const data=props.data
    return (
       <Card className ='expensescard'>
           {data.map((item)=>{
               return (
                <ExpensesItem key={item.key} item={item}></ExpensesItem>
               )
           })}
       </Card>
    )
}
export default Expenses