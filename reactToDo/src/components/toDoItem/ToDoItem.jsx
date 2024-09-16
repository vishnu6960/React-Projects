import { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const ToDoItem = ({task, deleteTodo, toggleComplete}) => {

    const [editToggle, setEditToggle] = useState(false)
    const [innerValue, setInnerValue] = useState(task.input)

    const handleInput = (e) =>{
        setInnerValue(e.target.value)
    }

    return(
        <>
            <li style={{textDecoration:task.completed ? "line-through" : "none"}}>
                <div>
                    {editToggle ? 
                        (<input value={innerValue} onChange={handleInput}/>) : 
                        (<h5 style={{display:"inline"}}>{innerValue}</h5>)}
                    <button onClick={() => setEditToggle(!editToggle)}>
                        {!editToggle ? "Edit" : "Update"}
                    </button>
                </div>
                <div>
                    <button onClick={() => toggleComplete(task.id)}>
                        {task.completed ? "Undo" : "Complete"}
                    </button>
                    
                    <button onClick={() => deleteTodo(task.id)}>Delete</button>
                </div>
                
            </li>
        </>
    )
        
}

export default ToDoItem