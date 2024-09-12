import { useState } from "react"



const Box = ({color,size,title}) => {

    const [isClicked, setClick] = useState(false)
    
    let changeStyle = {
        backgroundColor:isClicked?color:"white",
        color: isClicked?"white":color,
        width:size,
        height:size,
        border:"1px solid black",
        textAlign:"center"
    }

    const changeBackground = () =>{
        setClick(!isClicked)
    }
    
    return(
        <>
            <div style={changeStyle} onClick={changeBackground}>Box {title}</div>
        </>
    )
}

export default Box