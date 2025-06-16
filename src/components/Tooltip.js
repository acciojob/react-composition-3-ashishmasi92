import React, { useState } from "react"



const Tooltip = ({ text, children }) => {
    const [show, setShow] = useState(false)


    const show1 = () => {
        setShow(true)
    }
    const hide = () => {
        setShow(false)
    }


    return (

        <div
            onMouseEnter={show1}
            onMouseLeave={hide}
            style={{ display: "inline-block", position: "relative" }}
        >
            {show && <div
                className="tooltip"
                data-testid="tooltip"

                style={{ position: "absolute", border: "none", textAlign: "center", width: "100px", backgroundColor: "red", margin: "20px ", padding: "10px", borderRadius: "10px", borderInlineStyle: "none" }}><p>{text}</p></div>}
            {children}

        </div>
    )
}

export default Tooltip