import React, {ChangeEvent, useState} from "react";
import TodoListDisplay from "./TodoListDisplay";

interface TodoListProps {

}

const TodoList: React.FC<TodoListProps> = () => {
    const [inputText, setInputText] = useState<string>('')
    const [tasks, setTasks] = useState<string[]>([])

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
            <button
                onClick={onClick}

                />


            <TodoListDisplay tasks={tasks}/>
        </div>
    )
}


export default TodoList;