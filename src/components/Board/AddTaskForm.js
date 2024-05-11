import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      onAddTask(newTaskName);
      setNewTaskName('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Enter task name"
        value={newTaskName}
        onChange={e => setNewTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTaskForm;