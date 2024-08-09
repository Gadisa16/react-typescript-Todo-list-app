import React, { useState } from 'react';
import "./css/style.css";

interface TodoFormProps {
    onAddTask: (task: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask(''); // Clear the input field
        }
    };

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
        />
        <button type="submit" className='Add-btn'>Add</button>
    </form>
);
};

export default TodoForm;
