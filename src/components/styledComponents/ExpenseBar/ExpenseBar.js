import Filler from "./Innerdiv.styled"
import Outer from "./Outerdiv.styled"

const ExpenseBar = (props) => {

    return (
        <div style={{margin:0,display:"flex",alignItems:'center',flexDirection:'column'}}>
            <Outer>
                <Filler height={props.height}></Filler>
            </Outer>
            <h6 style={{textAlign:'center',margin:0}}>{props.label}</h6>
        </div>
    )
}
export default ExpenseBar;