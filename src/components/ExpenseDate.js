import Card from "./card"
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    return (
        <Card className='date'>
            <h1 className="datehead">Date</h1>
            <div className="dateval">{props.date.toLocaleDateString('en-us', { day: '2-digit', month: 'long', year: 'numeric' })}
            </div>
        </Card>
    )
}
export default ExpenseDate