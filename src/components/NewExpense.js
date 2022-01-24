import { useState } from "react"
import Card from "./card"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props)=>{
    // const [data,setdata] =useState({name:'',date:'',price:''})
    // const dataHandler =(formdata)=>{
    //     setdata(formdata)
    // }
    return (<Card>
        <ExpenseForm dataHandler={props.dataHandler}></ExpenseForm>
    </Card>)

}
export default NewExpense