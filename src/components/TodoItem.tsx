import React from 'react';
import "./css/style.css";

interface TodoItemProps {
    task: string;
    onEdit: () => void;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onEdit, onDelete }) => {
    return (
        <li>
            {task}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;
