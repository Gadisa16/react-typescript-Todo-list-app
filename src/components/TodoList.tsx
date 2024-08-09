import React from 'react';
import TodoItem from './TodoItem';
import "./css/style.css";

interface TodoListProps {
    tasks: string[];
    onEditTask: (index: number) => void;
    onDeleteTask: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onEditTask, onDeleteTask }) => {
return (
    <ul>
        {tasks.map((task, index) => (
            <TodoItem
                key={index}
                task={task}
                onEdit={() => onEditTask(index)}
                onDelete={() => onDeleteTask(index)}
            />
        ))}
    </ul>
);
};

export default TodoList;