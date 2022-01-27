import { useState } from "react"
import Card from "./card"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props)=>{
    // const [data,setdata] =useState({name:'',date:'',price:''})
    // const dataHandler =(formdata)=>{
    //     setdata(formdata)
    // }
    const [FormVisibility,setFormVisibility] = useState(false)
    return (<Card className='cardaligner'>
        {!FormVisibility && <button className="btn" onClick={()=>{setFormVisibility((prev)=>{return !prev})}}>AddNewExpense</button>}
        {FormVisibility && <ExpenseForm dataHandler={props.dataHandler}setFormVisibility={setFormVisibility}></ExpenseForm>}
    </Card>)

}
export default NewExpense