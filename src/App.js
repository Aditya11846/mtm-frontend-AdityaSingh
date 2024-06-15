import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TasksList from './components/TasksList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index) => {
    const newTask = prompt("Edit your task", tasks[index]);
    if (newTask !== null) {
      const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      <TasksList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
