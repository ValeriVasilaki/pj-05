import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetailPage = () => {
  const { id } = useParams();
  const [description, setDescription] = useState('');

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  return (
    <div className="task-detail">
      <h2>Task Details</h2>
      <p>ID: {id}</p>
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <p>Description: {description || 'This task has no description'}</p>
      <Link to="/">Back to Board</Link>
    </div>
  );
}

export default TaskDetailPage;