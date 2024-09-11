import { useEffect, useState } from "react"

const ToDoApp = () =>{

    const [task, setTask] = useState([])
    const [input, setInput] = useState("")

    const addTodo = (e)=>{
        // e.preventDefault()
        setTask([...task, input])
        setInput("")
    }
    useEffect(() => {
        if(task.length > 0)
            console.log(task)
    }, [task])

    return (
        <>
            <h1>To-Do App</h1>
            <input type="text" placeholder="Enter your Text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={(e) => addTodo(e)}>Add task</button>
        </>
    )

}

export default ToDoApp