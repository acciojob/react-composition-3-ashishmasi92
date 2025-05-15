import React, { useState } from "react"



const Tooltip = ({text,children})=>{
const [show ,setShow] = useState(false)


const show1 = ()=>{
    setShow(true)
}
const hide = ()=>{
    setShow(false)
}


    return (
       
        <div 
        className="tooltip"
        onMouseOver={show1}
        onMouseLeave={hide}
        >
            {show&& <div style={{ position: "absolute", border:"none", textAlign:"center", width:"100px", backgroundColor:"red", margin:"20px ", padding:"10px", borderRadius:"10px", borderInlineStyle:"none"}}><p>{text}</p></div>}
         <h1>   {children}</h1>
            
        </div>
    )
}

export default Tooltip