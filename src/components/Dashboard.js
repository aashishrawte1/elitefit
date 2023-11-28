import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = ({ tasks, addTask, deleteTask, toggleTaskStatus, editTask }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [completionFilter, setCompletionFilter] = useState('All');

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((task) =>
      priorityFilter === 'All' ? true : task.priority === priorityFilter
    )
    .filter((task) =>
      completionFilter === 'All'
        ? true
        : completionFilter === 'Completed'
        ? task.completed
        : !task.completed
    );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriorityFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const handleCompletionFilterChange = (e) => {
    setCompletionFilter(e.target.value);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
      </label>
      <label>
        Priority:
        <select value={priorityFilter} onChange={handlePriorityFilterChange}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <label>
        Completion Status:
        <select
          value={completionFilter}
          onChange={handleCompletionFilterChange}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </label>
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
        editTask={editTask}
      />
    </div>
  );
};

export default Dashboard;
