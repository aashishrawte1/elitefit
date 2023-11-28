import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <div style={{backgroundColor: '#b0b0b0', padding: '20px'}}>
      <h1 style={{textAlign: 'center'}}>Task Manager</h1>
      <Dashboard tasks={tasks} addTask={addTask} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} editTask={editTask} />
    </div>
  );
};

export default App;
