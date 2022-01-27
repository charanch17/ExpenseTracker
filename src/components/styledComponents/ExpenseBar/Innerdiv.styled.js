import styled from "styled-components";
const Filler = styled.div`
  height:${(props)=>props.height};
  width:0.5rem;
   border-radius:100px;
  background-color:red;
  /* padding:1px; */
  align-self:flex-end;
  transition-duration:800ms;
  transition-timing-function:ease-out;
  /* transition-delay:2s; */
`
export default Filler;