import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ListAltIcon from '@mui/icons-material/ListAlt';
import "./components/css/style.css";
const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index: number) => {
    const newTask = prompt('Edit your task', tasks[index]);
    if (newTask?.trim()) {
      const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      
      <h1><ListAltIcon className='listIcon'/>Todo List</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
