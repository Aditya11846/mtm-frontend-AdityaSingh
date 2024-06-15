import React from 'react';

const TasksList = ({ tasks, editTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => editTask(index)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
