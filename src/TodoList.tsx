import React, {ChangeEvent, useState} from "react";
import TodoListDisplay from "./TodoListDisplay";
import ErrorAlert from "./ErrorAlert";

interface TodoListProps {

}

const TodoList: React.FC<TodoListProps> = () => {
    const [inputText, setInputText] = useState<string>('')
    const [tasks, setTasks] = useState<string[]>([])
    const [error, setError] = useState<string>("")


    const deleteItem = (taskText: String) => {
        let newTasks = tasks.filter(item => item !== taskText)
        setTasks(newTasks)
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClick()
        }
    }

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const onClick = () => {
        if (inputText === "") {
            setError("Cannot add blank task!")
            return
        }
        if (tasks.includes(inputText)) {
            setError("Task already in list!")
            return
        }
        setError("")
        let newTasks = [...tasks, inputText]
        setTasks(newTasks)
    }

    const deleteAllHandler = () => {
        setTasks([])
    }

    return (
        <div>
            <input
                type="text"
                id="taskInput"
                value={inputText}
                onChange={handleTextChange}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={onClick}>
                Add task
            </button>
            <span>{tasks.length} tasks left!</span>
            <button onClick={deleteAllHandler}>
                Delete all tasks
            </button>
            <ErrorAlert text={error}/>
            <TodoListDisplay
                tasks={tasks}
                deleteTask={deleteItem}
            />
        </div>
    )
}


export default TodoList;
