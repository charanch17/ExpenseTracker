
import ExpenseBar from "./styledComponents/ExpenseBar/ExpenseBar"
import styles from './Bars.module.css'

const Bars = (props) => {
    const ComputeBardata = () => {
        const dic = { 'Jan': 0, 'Feb': 0, 'Mar': 0, 'Apr': 0, 'May': 0, 'Jun': 0, 'Jul': 0, 'Aug': 0, 'Sep': 0, 'Oct': 0, 'Nov': 0, 'Dec': 0 }
        // console.log(props.FilteredList)
        for (let i of props.FilteredList) {
            const month = i.date.toLocaleString('default', { month: 'long' }).slice(0, 3)
            dic[month] += parseFloat(i.price)
        }

        let total = 0

        for (let i in dic) {
            total += dic[i]
        }
        const Bardata = []
        for (let i in dic) {
            // console.log(dic[i],)
            let height = Math.round((dic[i] / total) * 100)

            Bardata.push({ label: i, height: height.toString() + '%' })
        }
        console.log(Bardata)
        return Bardata
    }
    const Bardata = ComputeBardata()
    return (
        <div className={styles.barbox}>
            {Bardata.map((item) => {
                return (
                    <ExpenseBar styles={{display:'flex'}} label={item.label} key={item.label} height={item.height}></ExpenseBar>
                )
            })}
        </div>
    )
}
export default Bars