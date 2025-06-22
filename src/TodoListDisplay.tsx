import React, {useState} from "react";

interface TodoListProps {
    tasks: String[]
}

const TodoListDisplay: React.FC<TodoListProps> = ({tasks}) => {
    return (
        <ul>
            {tasks.map(task => (
                <li>
                    {task}
                </li>
            ))}
        </ul>
    )
}

export default TodoListDisplay;

/**
 *
 * 🧩 Prompt: TaskList Component
 * Goal: Build a mini to-do list component with the following features:
 *
 * Add a new task by typing into an input field and clicking “Add”
 *
 * Display the list of tasks below
 *
 * Allow removing a task by clicking a “Delete” button next to it
 *
 * 🔧 Requirements:
 * Use React function components
 *
 * Use TypeScript (type props, state, etc.)
 *
 * Use useState for state management
 *
 * Keep code modular and readable
 *
 * 📘 Bonus Features (Optional):
 * Prevent adding empty tasks
 *
 * Show total count of tasks
 *
 * Style the list with minimal borders/padding
 *
 * Add a keyboard shortcut to add tasks via Enter key
 *
 *
 */