import React from "react";

interface TaskProps {
    text: string,
    deleteTask: (text: string) => void
}

const Task: React.FC<TaskProps> = ({text, deleteTask}) => {
    return (
        <div>
            <span> {text} </span>
            <button onClick={() => deleteTask(text)}>Delete</button>
        </div>
    )
}

export default Task
