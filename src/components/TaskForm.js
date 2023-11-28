import React, { useState } from 'react';
import "./styles.css";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
    });
  };

  return (
    <form style={{ 
        width: '100%', height: '400px', color: 'black',
        display: 'flex', flexDirection: 'column'
      }} className="task-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={task.title} onChange={handleChange} className="input-field" required />
      </label>
      <label>
        Description:
        <textarea name="description" value={task.description} onChange={handleChange} className="input-field" />
      </label>
      <label>
        Due Date:
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="input-field" />
      </label>
      <label>
        Priority:
        <select name="priority" value={task.priority} onChange={handleChange} className="input-field">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <button type="submit" className="submit-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
