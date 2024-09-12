import { useEffect, useState } from "react"
import ToDoList from "../toDoList/ToDoList"

const ToDoApp = () =>{

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")

    const addTodo = ()=>{
        if(input.trim()){
            setTasks([...tasks, {id: Date.now(), input, completed: false}])
            setInput("")
        }    
    }

    const deleteTodo = (id) =>{
        setTasks(tasks.filter((item) => item.id !== id))
    }

    const toggleComplete = (id) =>{
        setTasks(tasks.map((task) =>{
            task.id === id ? {...task, completed: !task.completed} : task
        }))
    }

    return (
        <>
            <h1>To-Do App</h1>
            <input type="text" placeholder="Enter your Text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={(e) => addTodo(e)}>Add task</button>

            <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        </>
    )

}

export default ToDoApp