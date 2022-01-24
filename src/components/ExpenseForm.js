import { useState } from "react"
import Card from "./card"
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [date, setdate] = useState('')
    const nameHandler = (event) => {
        setname(event.target.value);
    }
    const priceHandler = (event) => {
        setprice(event.target.value)

    }
    const dateHandler = (event) => {
        setdate(event.target.value)
    }
    const sendData = () => {
        const data = {
            name: name, price: price, date: new Date(date),key:Math.random()
        }
        props.dataHandler(data)
        setname('')
        setdate('')
        setprice('')
    }
    return (
        <>
            <Card className='form'>
                <h1>New Expense</h1>
                <div className="form__element">
                    <label><h3 className="label" >Title</h3></label>
                    <input type='text' onChange={nameHandler} value={name} />
                </div>
                <div className="form__element">
                    <label><h3 className="label" >Price</h3></label>
                    <input type='text' onChange={priceHandler} value={price} />
                </div>
                <div className="form__element">
                    <label><h3 className="label">Date</h3></label>
                    <input type='date' onChange={dateHandler} value={date} />
                </div>
                <div className="form__element">
                    <button onClick={sendData}>
                        <p>submit</p>
                    </button>
                </div>
            </Card>
        </>
    )
}
export default ExpenseForm;