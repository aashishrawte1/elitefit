import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskStatus, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset the edited task to the original task when canceled
    setEditedTask({ ...task });
  };

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  return (
    <li>
      {isEditing ? (
        <>
          <label>
            Title:
            <input type="text" name="title" value={editedTask.title} onChange={handleChange} required />
          </label>
          <label>
            Description:
            <textarea name="description" value={editedTask.description} onChange={handleChange} />
          </label>
          <label>
            Due Date:
            <input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleChange} />
          </label>
          <label>
            Priority:
            <select name="priority" value={editedTask.priority} onChange={handleChange}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <input type="checkbox" checked={task.completed} onChange={() => toggleTaskStatus(task.id)} />
          <span>{task.title}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
