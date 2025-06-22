import React, {ChangeEvent, useState} from "react";
import TodoListDisplay from "./TodoListDisplay";

interface TodoListProps {

}

const TodoList: React.FC<TodoListProps> = () => {
    const [inputText, setInputText] = useState<string>('')
    const [tasks, setTasks] = useState<string[]>([])


    const deleteItem = (taskText: String) => {
        let newTasks = tasks.filter(item => item !== taskText)
        setTasks(newTasks)
    }

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const onClick = () => {
        let newTasks = [...tasks, inputText]
        setTasks(newTasks)
    }

    return (
        <div>
            <input
                type="text"
                id="taskInput"
                value={inputText}
                onChange={handleTextChange}
            />
            <button onClick={onClick}>
                Add task
            </button>


            <TodoListDisplay
                tasks={tasks}
                deleteTask={deleteItem}
            />
        </div>
    )
}


export default TodoList;