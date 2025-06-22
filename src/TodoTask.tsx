import React from "react";


interface TodoTaskProps {
    description: String
}

const TodoTask: React.FC<TodoTaskProps> = ({description}: TodoTaskProps) => {
    return(
        <div>{description}</div>
    )
}

export default TodoTask;
