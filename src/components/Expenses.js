import Card from "./card"
import ExpensesItem from "./ExpensesItem"
import './Expenses.css'
import { useEffect, useState } from "react"
import Bars from "./Bars"

const Expenses = (props) => {
    const data = props.data
    console.log(data)
    const distinctYears = props.distinctYears
    let [selectedYear, setselectedYear] = useState('2022')
    const [FilteredList, setFilteredList] = useState(data.filter((element) => { return element.date.getFullYear().toString() === selectedYear }))
    useEffect(() => { setFilteredList(data.filter((element) => { return element.date.getFullYear().toString() === selectedYear })) }, [selectedYear, data])
    const selectHandler = (event) => {
        console.log('j', event.target.value)
        setselectedYear(event.target.value);
        // setFilteredList(data.filter((element)=>{console.log(selectedYear,new Date());return element.date.getFullYear().toString()===selectedYear}))
        // console.log(selectedYear)

    }
    return (
        <Card className='expensescard'>
            <select className='select' value={selectedYear} onChange={selectHandler}>
                {distinctYears.map((year) => {
                    return <option key={year} value={year}>{year}</option>
                })}
            </select>
            <Bars FilteredList={FilteredList}></Bars>

            {FilteredList.map((item) => {
                return (
                    <ExpensesItem key={item.key} item={item}></ExpensesItem>
                )
            })}
        </Card>
    )
}
export default Expenses