import ToDoItem from "../toDoItem/ToDoItem"

const ToDoList = ({tasks, deleteTodo, toggleComplete}) => {
    return ( 
        <>
            <ul>
               {tasks.map((task) =>(
                <ToDoItem 
                key={task.id} 
                task={task} 
                deleteTodo={deleteTodo} 
                toggleComplete={toggleComplete} 
                />
               ))}
            </ul>
        </>
    )
}

export default ToDoList