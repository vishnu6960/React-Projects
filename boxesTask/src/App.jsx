
import { useState } from "react"
import Box from "./components/Box"

let style1 = {
  display:"flex",
  flexWrap:"wrap",
  gap:"50px",
  justifyContent:"center"
}

const App = () =>{

  const [boxes, setBoxes] = useState(3)
  const addBox = () =>{
    setBoxes((prev)=>prev+1)
  }

  return(
    <div style={{display:"flex", flexDirection:"column", gap:"30px", alignItems:"center", width:"60%", margin:"auto"}}>
      <button onClick={addBox}>Add New Box</button>
      <div style={style1}>
        {
          Array.from({length:boxes}).map((_,index)=><Box color="black" size="100px" key={index} title={index+1}/>)
        }
      </div>

    </div>
    
  )
}

export default App