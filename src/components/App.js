
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div style={{display:"inline-block", padding:"100px", position:"relative"}}>

<Tooltip
text={"This is a Tooltip"}
>
   <h2 style={{border:"none", backgroundColor:"transparent", borderBottom:"1px solid black"}} className="tooltip" >Hover over me</h2>
</Tooltip>



<Tooltip
text={"this is another Tooltip"}
>
<button style={{border:"none", backgroundColor:"transparent", borderBottom:"1px solid black", marginTop:"150px" }} ><p>Hover over me to see another Tooltip</p></button>
</Tooltip>

    </div>
  )
}

export default App
