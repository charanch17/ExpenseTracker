import { useState } from "react";
import Card from "./components/card";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";


function App() {
  const [expensesdata,setexpensesdata]=useState([
    {key:1,date:new Date(),name:'fridge',price:'100'},
    {key:2,date:new Date(),name:'Phone',price:'900'},
    {key:3,date:new Date(),name:'washing machine',price:'1000'},
    {key:4,date:new Date(),name:'house',price:'10000'},
    {key:5,date:new Date(),name:'chair',price:'10000'}
  ])
  const dataHandler =(formdata)=>{
    setexpensesdata((oldstate)=>{return [...oldstate,formdata]})
  }
  return (
    <div>
      <NewExpense dataHandler={dataHandler}></NewExpense>
      <Expenses data={expensesdata}></Expenses>
    </div>

  );
}

export default App;
